# ModelsConnectionRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**permissions** | **List[str]** |  | [optional] 
**updated_at** | **str** |  | [optional] 
**users** | [**List[ModelsConnectionRoleUser]**](ModelsConnectionRoleUser.md) |  | [optional] 

## Example

```python
from monad.models.models_connection_role import ModelsConnectionRole

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsConnectionRole from a JSON string
models_connection_role_instance = ModelsConnectionRole.from_json(json)
# print the JSON string representation of the object
print(ModelsConnectionRole.to_json())

# convert the object into a dict
models_connection_role_dict = models_connection_role_instance.to_dict()
# create an instance of ModelsConnectionRole from a dict
models_connection_role_from_dict = ModelsConnectionRole.from_dict(models_connection_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


