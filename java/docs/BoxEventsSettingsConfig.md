

# BoxEventsSettingsConfig

Box Events secrets

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, data from 1 year ago upto now from box is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**eventType** | **List&lt;String&gt;** | A list of event types to filter by. |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



