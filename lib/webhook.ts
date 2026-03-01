import type { WebhookLeadPayload } from "@/types/webhook-n8n";

function getWebhookUrl(): string | null {
    const isProd = process.env.NODE_ENV === "production";
    const url = isProd
        ? process.env.WEBHOOK_URL_PROD
        : process.env.WEBHOOK_URL_TEST;

    return url ?? null;
}

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
