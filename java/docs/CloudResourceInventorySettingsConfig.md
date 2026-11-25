

# CloudResourceInventorySettingsConfig

Wiz cloud resource inventory settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from when no saved state exists. If not specified, syncing starts from now; historical data is not backfilled. |  [optional] |
|**cloudPlatform** | **List&lt;WizCloudPlatform&gt;** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. |  [optional] |
|**endpointUrl** | **String** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/cloud-resource-inventory&#39;. |  |
|**entityType** | **List&lt;WizEntityType&gt;** | Entity types for Wiz. |  |
|**fullSnapshot** | **Boolean** | Re-fetch every resource of the selected entity types on each sync instead of only resources updated since the last sync. |  [optional] |
|**interval** | **Integer** | Minimum number of hours between syncs, in both incremental and full snapshot modes. Values below 24 are raised to 24. The interval timer begins after each sync operation completes. |  [optional] |
|**rateLimit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



