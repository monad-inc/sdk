

# WizAuditLogsSettingsConfig

Wiz Audit Logs settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from up to 180 days. If not specified, a sync of 180 days back is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**tenantDataCenter** | **String** | DataCenter represents the tenant&#39;s data center location. Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



