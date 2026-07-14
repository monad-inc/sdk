# ModelsResourceUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_type** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**organization_name** | **str** |  | [optional] 
**resource_id** | **str** |  | [optional] 
**resource_type** | **str** |  | [optional] 
**sub_type** | **str** |  | [optional] 

## Example

```python
from monad.models.models_resource_usage import ModelsResourceUsage

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsResourceUsage from a JSON string
models_resource_usage_instance = ModelsResourceUsage.from_json(json)
# print the JSON string representation of the object
print(ModelsResourceUsage.to_json())

# convert the object into a dict
models_resource_usage_dict = models_resource_usage_instance.to_dict()
# create an instance of ModelsResourceUsage from a dict
models_resource_usage_from_dict = ModelsResourceUsage.from_dict(models_resource_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


