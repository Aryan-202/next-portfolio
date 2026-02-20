/**
 * Webhook Service
 * ---------------
 * Sends lead data to a configured webhook URL (e.g. n8n, Make, Zapier).
 * Automatically switches between the TEST and PRODUCTION webhook URL
 * based on the NODE_ENV environment variable.
 *
 * Environment variables (set in .env):
 *   WEBHOOK_URL_TEST  — your ngrok / local tunnel URL (used in development)
 *   WEBHOOK_URL_PROD  — your real production webhook URL
 */

export interface WebhookLeadPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
    source: string;        // e.g. "portfolio-contact-form"
    submittedAt: string;   // ISO timestamp
}

/**
 * Returns the correct webhook URL for the current environment.
 */
function getWebhookUrl(): string | null {
    const isProd = process.env.NODE_ENV === "production";
    const url = isProd
        ? process.env.WEBHOOK_URL_PROD
        : process.env.WEBHOOK_URL_TEST;

    return url ?? null;
}

/**
 * Sends the contact form lead to the configured webhook.
 * Throws an error if the webhook URL is missing or the request fails.
 */
export async function sendLeadToWebhook(
    payload: WebhookLeadPayload
): Promise<void> {
    const webhookUrl = getWebhookUrl();

    if (!webhookUrl) {
        const env = process.env.NODE_ENV === "production" ? "WEBHOOK_URL_PROD" : "WEBHOOK_URL_TEST";
        throw new Error(`Webhook URL not configured. Please set ${env} in your .env file.`);
    }

    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // ngrok requires this header to bypass the browser warning page
            "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error(
            `Webhook request failed with status ${response.status}: ${response.statusText}`
        );
    }
}
