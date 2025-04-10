

# CloudResourceInventorySettingsConfig

Wiz cloud resource inventory settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cloudPlatform** | **List&lt;String&gt;** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. |  [optional] |
|**endpointUrl** | **String** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/cloud-resource-inventory&#39;. |  [optional] |
|**entityType** | **List&lt;String&gt;** | Entity types for Wiz. Ex: &#39;ACCOUNT&#39;, &#39;REGION&#39;, &#39;VPC&#39;, &#39;SUBNET&#39;, &#39;INSTANCE&#39;. |  [optional] |
|**fullSnapshot** | **Boolean** | FullSnapshot indicates whether to fetch a full snapshot of the cloud resource inventory. |  [optional] |
|**interval** | **Integer** | Defines how frequently (in hours) the system polls the Wiz API to retrieve updated data. Only applicable when full_snapshot is enabled. The interval timer begins after each sync operation completes. |  [optional] |



