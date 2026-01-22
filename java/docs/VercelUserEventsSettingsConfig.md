

# VercelUserEventsSettingsConfig


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic data for testing, instead of connecting to a real data source. Defaults to an hourly cron schedule for cron-based inputs. |  [optional] |
|**withPayload** | **Boolean** | Whether to include detailed payload information in the events. |  [optional] |



