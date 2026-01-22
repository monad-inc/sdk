

# KoiAuditLogsSettingsConfig

Koi audit logs settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**auditLogTypes** | **List&lt;String&gt;** | Filter audit logs by type(s). Available types: approval_requests, devices, endpoints, extensions, firewall. Leave empty to fetch all types. |  [optional] |
|**backfillStartTime** | **String** | BackfillStartTime is an optional ISO8601 timestamp to start fetching from. If not set, the input starts from the current time (no historical backfill). Example: \&quot;2024-01-01T00:00:00Z\&quot; |  [optional] |
|**baseUrl** | **String** | Base URL for the Koi API (default: https://api.prod.koi.security) |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



