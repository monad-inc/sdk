

# WizAuditLogsSettingsConfig

Wiz Audit Logs settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from, up to a maximum lookback of 180 days; older values are clamped to 180 days ago. If not specified, no past records are fetched and syncing starts from the current time. All syncs thereafter are incremental. |  [optional] |
|**rateLimit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  |  [optional] |
|**tenantDataCenter** | **String** | DataCenter represents the tenant&#39;s data center location. Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; |  |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



