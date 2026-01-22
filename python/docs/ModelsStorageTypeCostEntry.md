# ModelsStorageTypeCostEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_per_byte** | **float** |  | [optional] 
**cost_per_gb** | **float** |  | [optional] 
**id** | **str** |  | [optional] 
**storage_type** | **str** |  | [optional] 

## Example

```python
from monad.models.models_storage_type_cost_entry import ModelsStorageTypeCostEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsStorageTypeCostEntry from a JSON string
models_storage_type_cost_entry_instance = ModelsStorageTypeCostEntry.from_json(json)
# print the JSON string representation of the object
print(ModelsStorageTypeCostEntry.to_json())

# convert the object into a dict
models_storage_type_cost_entry_dict = models_storage_type_cost_entry_instance.to_dict()
# create an instance of ModelsStorageTypeCostEntry from a dict
models_storage_type_cost_entry_from_dict = ModelsStorageTypeCostEntry.from_dict(models_storage_type_cost_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


