# CloudResourceInventoryReportsSecretsConfig

Wiz Cloud Resource Inventory Reports secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloud_resource_inventory_reports_secrets_config import CloudResourceInventoryReportsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudResourceInventoryReportsSecretsConfig from a JSON string
cloud_resource_inventory_reports_secrets_config_instance = CloudResourceInventoryReportsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudResourceInventoryReportsSecretsConfig.to_json())

# convert the object into a dict
cloud_resource_inventory_reports_secrets_config_dict = cloud_resource_inventory_reports_secrets_config_instance.to_dict()
# create an instance of CloudResourceInventoryReportsSecretsConfig from a dict
cloud_resource_inventory_reports_secrets_config_from_dict = CloudResourceInventoryReportsSecretsConfig.from_dict(cloud_resource_inventory_reports_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


