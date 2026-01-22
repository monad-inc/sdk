# ModelsStorageTypeCostConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**costs** | [**List[ModelsStorageTypeCostEntry]**](ModelsStorageTypeCostEntry.md) |  | [optional] 
**organization_id** | **str** |  | [optional] 

## Example

```python
from monad.models.models_storage_type_cost_config import ModelsStorageTypeCostConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsStorageTypeCostConfig from a JSON string
models_storage_type_cost_config_instance = ModelsStorageTypeCostConfig.from_json(json)
# print the JSON string representation of the object
print(ModelsStorageTypeCostConfig.to_json())

# convert the object into a dict
models_storage_type_cost_config_dict = models_storage_type_cost_config_instance.to_dict()
# create an instance of ModelsStorageTypeCostConfig from a dict
models_storage_type_cost_config_from_dict = ModelsStorageTypeCostConfig.from_dict(models_storage_type_cost_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


