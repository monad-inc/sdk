

# MerakiConfigLogsSettingsConfig


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of data from google workspace is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**orgId** | **String** | URL of the organization |  [optional] |
|**region** | **String** | api.meraki.com/api/v1 for most parts of the world. Different countries may have different base URIs |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



