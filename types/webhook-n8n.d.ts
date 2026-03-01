export interface WebhookLeadPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
    source: string;
    submittedAt: string;
}