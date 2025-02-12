# CloudAssetInventorySecretsConfig

Google Cloud Asset Inventory secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloud_asset_inventory_secrets_config import CloudAssetInventorySecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAssetInventorySecretsConfig from a JSON string
cloud_asset_inventory_secrets_config_instance = CloudAssetInventorySecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudAssetInventorySecretsConfig.to_json())

# convert the object into a dict
cloud_asset_inventory_secrets_config_dict = cloud_asset_inventory_secrets_config_instance.to_dict()
# create an instance of CloudAssetInventorySecretsConfig from a dict
cloud_asset_inventory_secrets_config_from_dict = CloudAssetInventorySecretsConfig.from_dict(cloud_asset_inventory_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


