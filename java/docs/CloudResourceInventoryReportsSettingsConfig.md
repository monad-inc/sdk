

# CloudResourceInventoryReportsSettingsConfig

Wiz Cloud Resource Inventory Reports settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cloudPlatform** | **List&lt;String&gt;** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. |  [optional] |
|**cron** | **String** | Cron expression for scheduling the input |  [optional] |
|**endpointUrl** | **String** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/cloud-resource-inventory&#39;. |  |
|**entityType** | **List&lt;String&gt;** | Entity types for Wiz. Ex: &#39;ACCOUNT&#39;, &#39;REGION&#39;, &#39;VPC&#39;, &#39;SUBNET&#39;, &#39;INSTANCE&#39;. |  |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



