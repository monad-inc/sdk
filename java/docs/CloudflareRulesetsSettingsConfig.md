

# CloudflareRulesetsSettingsConfig

Cloudflare Rulesets settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**accountId** | **String** | Your Cloudflare account ID (for account-level rulesets). Required if ZoneIDs is not specified. |  [optional] |
|**cron** | **String** | Cron expression for scheduling the input |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |
|**zoneIds** | **List&lt;String&gt;** | List of zone IDs (for zone-level rulesets). If empty and AccountID is not specified, fetches from all zones. |  [optional] |



