

# AivenServiceLogsSettingsConfig

Aiven Service Logs settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**project** | **String** | The Aiven project name |  [optional] |
|**service** | **String** | The Aiven service name |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



