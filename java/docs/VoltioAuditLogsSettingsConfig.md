

# VoltioAuditLogsSettingsConfig

Volt.io Audit Logs settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, defaults to 90 days ago. All syncs thereafter will be incremental. |  [optional] |
|**baseUrl** | **String** | Base URL of your Volt.io API instance (e.g., https://api.volt.io) |  [optional] |
|**customerId** | **String** | Optional: Filter audit logs by specific customer ID |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



