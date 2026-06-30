

# TenableVulnerabilitiesSettingsConfig

Tenable vulnerabilities settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching vulnerabilities from. If not specified, a full sync of assets is fetched on the first sync. All syncs thereafter will have incremental data. |  [optional] |
|**rateLimit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



