# CloudResourceInventoryReportsSettingsConfig

Wiz Cloud Resource Inventory Reports settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_platform** | [**List[WizCloudPlatform]**](WizCloudPlatform.md) | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. | [optional] 
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**endpoint_url** | **str** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/cloud-resource-inventory&#39;. | 
**entity_type** | [**List[WizEntityType]**](WizEntityType.md) | Entity types for Wiz. Ex: &#39;ACCOUNT&#39;, &#39;REGION&#39;, &#39;VPC&#39;, &#39;SUBNET&#39;, &#39;INSTANCE&#39;. | 
**rate_limit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.cloud_resource_inventory_reports_settings_config import CloudResourceInventoryReportsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudResourceInventoryReportsSettingsConfig from a JSON string
cloud_resource_inventory_reports_settings_config_instance = CloudResourceInventoryReportsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudResourceInventoryReportsSettingsConfig.to_json())

# convert the object into a dict
cloud_resource_inventory_reports_settings_config_dict = cloud_resource_inventory_reports_settings_config_instance.to_dict()
# create an instance of CloudResourceInventoryReportsSettingsConfig from a dict
cloud_resource_inventory_reports_settings_config_from_dict = CloudResourceInventoryReportsSettingsConfig.from_dict(cloud_resource_inventory_reports_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


