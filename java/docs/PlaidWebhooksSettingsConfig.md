

# PlaidWebhooksSettingsConfig

Plaid Webhooks settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**clientId** | **String** | ClientID is the Plaid API client_id. Required only when verification is enabled. |  [optional] |
|**verifyWebhooks** | **Boolean** | VerifyWebhooks toggles Plaid signature verification. Unset defaults to true. |  [optional] |
|**webhookTypes** | **List&lt;String&gt;** | WebhookTypes restricts which webhook_type values are emitted. Empty &#x3D; keep all. |  [optional] |



