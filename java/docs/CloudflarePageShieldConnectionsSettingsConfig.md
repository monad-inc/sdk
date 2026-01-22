

# CloudflarePageShieldConnectionsSettingsConfig

Cloudflare Page Shield Connections settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cron** | **String** | Cron expression for scheduling the input |  [optional] |
|**excludeCdnCgi** | **Boolean** | Exclude connections to Cloudflare /cdn-cgi paths. Default: true |  [optional] |
|**status** | **String** | Filter connections by status: \&quot;active\&quot;, \&quot;infrequent\&quot;, or \&quot;inactive\&quot;. Default: \&quot;active\&quot; |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |
|**zoneIds** | **List&lt;String&gt;** | Optional list of specific zone IDs to fetch connections from. If empty, fetches from all zones. |  [optional] |



