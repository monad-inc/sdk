# ModelsResourceUsageList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**usages** | [**List[ModelsResourceUsage]**](ModelsResourceUsage.md) |  | [optional] 

## Example

```python
from monad.models.models_resource_usage_list import ModelsResourceUsageList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsResourceUsageList from a JSON string
models_resource_usage_list_instance = ModelsResourceUsageList.from_json(json)
# print the JSON string representation of the object
print(ModelsResourceUsageList.to_json())

# convert the object into a dict
models_resource_usage_list_dict = models_resource_usage_list_instance.to_dict()
# create an instance of ModelsResourceUsageList from a dict
models_resource_usage_list_from_dict = ModelsResourceUsageList.from_dict(models_resource_usage_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


