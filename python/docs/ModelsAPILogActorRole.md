# ModelsAPILogActorRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**inherited** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 

## Example

```python
from monad.models.models_api_log_actor_role import ModelsAPILogActorRole

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsAPILogActorRole from a JSON string
models_api_log_actor_role_instance = ModelsAPILogActorRole.from_json(json)
# print the JSON string representation of the object
print(ModelsAPILogActorRole.to_json())

# convert the object into a dict
models_api_log_actor_role_dict = models_api_log_actor_role_instance.to_dict()
# create an instance of ModelsAPILogActorRole from a dict
models_api_log_actor_role_from_dict = ModelsAPILogActorRole.from_dict(models_api_log_actor_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


