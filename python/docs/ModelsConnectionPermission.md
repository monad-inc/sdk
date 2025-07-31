# ModelsConnectionPermission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 

## Example

```python
from monad.models.models_connection_permission import ModelsConnectionPermission

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsConnectionPermission from a JSON string
models_connection_permission_instance = ModelsConnectionPermission.from_json(json)
# print the JSON string representation of the object
print(ModelsConnectionPermission.to_json())

# convert the object into a dict
models_connection_permission_dict = models_connection_permission_instance.to_dict()
# create an instance of ModelsConnectionPermission from a dict
models_connection_permission_from_dict = ModelsConnectionPermission.from_dict(models_connection_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


