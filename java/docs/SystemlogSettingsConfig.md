

# SystemlogSettingsConfig

Okta system log settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync (90 days) of data is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**orgUrl** | **String** | The URL of the Okta organization |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



