# CloudResourceInventorySettingsConfig

Wiz cloud resource inventory settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_platform** | **List[str]** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. | [optional] 
**endpoint_url** | **str** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/cloud-resource-inventory&#39;. | [optional] 
**entity_type** | **List[str]** | Entity types for Wiz. Ex: &#39;ACCOUNT&#39;, &#39;REGION&#39;, &#39;VPC&#39;, &#39;SUBNET&#39;, &#39;INSTANCE&#39;. | [optional] 

## Example

```python
from monad.models.cloud_resource_inventory_settings_config import CloudResourceInventorySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudResourceInventorySettingsConfig from a JSON string
cloud_resource_inventory_settings_config_instance = CloudResourceInventorySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudResourceInventorySettingsConfig.to_json())

# convert the object into a dict
cloud_resource_inventory_settings_config_dict = cloud_resource_inventory_settings_config_instance.to_dict()
# create an instance of CloudResourceInventorySettingsConfig from a dict
cloud_resource_inventory_settings_config_from_dict = CloudResourceInventorySettingsConfig.from_dict(cloud_resource_inventory_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


