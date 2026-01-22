

# CloudflareUrlScannerSettingsConfig

Cloudflare URL Scanner settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**accountId** | **String** | Cloudflare Account ID |  [optional] |
|**backfillStartTime** | **String** | Date to start fetching data from (RFC3339 format). Note: Historical data availability depends on your Cloudflare plan (Free: last 50 scans, Self Serve: 30 days, Enterprise: 12 months, Cloudforce One: unlimited) |  [optional] |
|**filterMyScans** | **Boolean** | Filter to only show scans created by the current API token |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source |  [optional] |



