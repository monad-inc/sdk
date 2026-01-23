

# CloudflareHttpRequestsSettingsConfig

Cloudflare HTTP Requests settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**fields** | **List&lt;String&gt;** | Fields to include in the query. Leave empty to use default curated list. Only fields available to your account will be included (validated against API). Maximum 50 fields due to API constraints. |  [optional] |
|**lookbackDuration** | **String** | Initial lookback duration for first sync (e.g., \&quot;24h\&quot;, \&quot;7d\&quot;). Respects API retention limits. |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |
|**zoneId** | **String** | Cloudflare Zone ID |  [optional] |



