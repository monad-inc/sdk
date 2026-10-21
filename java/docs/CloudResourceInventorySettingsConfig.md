

# CloudResourceInventorySettingsConfig

Wiz cloud resource inventory settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from when no saved state exists. If not specified, syncing starts from now; historical data is not backfilled. |  [optional] |
|**cloudPlatform** | **List&lt;WizCloudPlatform&gt;** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. |  [optional] |
|**endpointUrl** | **String** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/cloud-resource-inventory&#39;. |  |
|**entityType** | **List&lt;WizEntityType&gt;** | Entity types for Wiz. |  |
|**fullSnapshot** | **Boolean** | FullSnapshot indicates whether to fetch a full snapshot of the cloud resource inventory. |  [optional] |
|**interval** | **Integer** | Defines how frequently (in hours) the system polls the Wiz API to retrieve updated data. Only applicable when full_snapshot is enabled. The interval timer begins after each sync operation completes. |  [optional] |
|**rateLimit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



