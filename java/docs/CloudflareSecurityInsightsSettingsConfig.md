

# CloudflareSecurityInsightsSettingsConfig


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**accountId** | **String** | Your Cloudflare account ID |  [optional] |
|**cron** | **String** | Cron expression for scheduling the input |  [optional] |
|**excludeIssueType** | **List&lt;String&gt;** | Filter to exclude specific issue types. Applied after the include filter. |  [optional] |
|**excludeSeverity** | **List&lt;String&gt;** | Filter to exclude specific severity levels. Applied after the include filter. |  [optional] |
|**issueType** | **List&lt;String&gt;** | Filter to include only specific issue types (compliance_violation, email_security, exposed_infrastructure, insecure_configuration, weak_authentication). If empty, all types are included. |  [optional] |
|**severity** | **List&lt;String&gt;** | Filter to include only specific severity levels (Low, Moderate, High, Critical). If empty, all severities are included. |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



