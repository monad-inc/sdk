

# FullScansSettingsConfig

Socket Full Scans settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**orgSlug** | **String** | Cron expression for scheduling the input |  [optional] |
|**repo** | **String** | A repository slug to filter full-scans by. |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



