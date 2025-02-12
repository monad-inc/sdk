# CloudAssetInventorySettingsConfig

Google Cloud Asset Inventory settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_types** | **List[str]** | The type of assets to scan for.  If left empty, will scan all assets | [optional] 
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**resource_names** | **List[str]** | The names of the resources to scan. can be organizations, projects or folders. | [optional] 

## Example

```python
from monad.models.cloud_asset_inventory_settings_config import CloudAssetInventorySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAssetInventorySettingsConfig from a JSON string
cloud_asset_inventory_settings_config_instance = CloudAssetInventorySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudAssetInventorySettingsConfig.to_json())

# convert the object into a dict
cloud_asset_inventory_settings_config_dict = cloud_asset_inventory_settings_config_instance.to_dict()
# create an instance of CloudAssetInventorySettingsConfig from a dict
cloud_asset_inventory_settings_config_from_dict = CloudAssetInventorySettingsConfig.from_dict(cloud_asset_inventory_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


