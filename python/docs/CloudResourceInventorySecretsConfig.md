# CloudResourceInventorySecretsConfig

Wiz cloud resource inventory secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID for the Wiz API. This is required to authenticate requests. | [optional] 
**client_secret** | **str** | Client Secret for the Wiz API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.cloud_resource_inventory_secrets_config import CloudResourceInventorySecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudResourceInventorySecretsConfig from a JSON string
cloud_resource_inventory_secrets_config_instance = CloudResourceInventorySecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudResourceInventorySecretsConfig.to_json())

# convert the object into a dict
cloud_resource_inventory_secrets_config_dict = cloud_resource_inventory_secrets_config_instance.to_dict()
# create an instance of CloudResourceInventorySecretsConfig from a dict
cloud_resource_inventory_secrets_config_from_dict = CloudResourceInventorySecretsConfig.from_dict(cloud_resource_inventory_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


