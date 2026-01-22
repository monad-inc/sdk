

# OperationLogsSettingsConfig

Zoom Operation Logs settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**accountId** | **String** | Account ID for the input |  [optional] |
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, data from 6 months ago up till now from zoom is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**categoryType** | **String** | The category of logs to pull |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



