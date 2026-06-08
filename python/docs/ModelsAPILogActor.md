# ModelsAPILogActor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_method** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**role** | [**ModelsAPILogActorRole**](ModelsAPILogActorRole.md) |  | [optional] 

## Example

```python
from monad.models.models_api_log_actor import ModelsAPILogActor

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsAPILogActor from a JSON string
models_api_log_actor_instance = ModelsAPILogActor.from_json(json)
# print the JSON string representation of the object
print(ModelsAPILogActor.to_json())

# convert the object into a dict
models_api_log_actor_dict = models_api_log_actor_instance.to_dict()
# create an instance of ModelsAPILogActor from a dict
models_api_log_actor_from_dict = ModelsAPILogActor.from_dict(models_api_log_actor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


