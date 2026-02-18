

# GoogleWorkspaceSettingsConfig

Google Workspace Activity settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**authType** | **String** | Authentication type (service_account or oauth) |  [optional] |
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of data from google workspace is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**email** | **String** | Email address to use for authenticating with Google Cloud (required for service_account auth). |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



