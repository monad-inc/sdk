# ModelsUserAuthProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**provider** | **str** |  | [optional] 
**provider_id** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from monad.models.models_user_auth_provider import ModelsUserAuthProvider

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsUserAuthProvider from a JSON string
models_user_auth_provider_instance = ModelsUserAuthProvider.from_json(json)
# print the JSON string representation of the object
print(ModelsUserAuthProvider.to_json())

# convert the object into a dict
models_user_auth_provider_dict = models_user_auth_provider_instance.to_dict()
# create an instance of ModelsUserAuthProvider from a dict
models_user_auth_provider_from_dict = ModelsUserAuthProvider.from_dict(models_user_auth_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


