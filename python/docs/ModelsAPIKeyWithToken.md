# ModelsAPIKeyWithToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**expiration_time** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**role_id** | **str** |  | [optional] 
**token** | **str** |  | [optional] 
**token_version** | **int** | TokenVersion is the current generation of the key. It is embedded in minted JWTs as the &#x60;ver&#x60; claim and bumped on rotation to invalidate previously-issued tokens without changing the key&#39;s id. | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_api_key_with_token import ModelsAPIKeyWithToken

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsAPIKeyWithToken from a JSON string
models_api_key_with_token_instance = ModelsAPIKeyWithToken.from_json(json)
# print the JSON string representation of the object
print(ModelsAPIKeyWithToken.to_json())

# convert the object into a dict
models_api_key_with_token_dict = models_api_key_with_token_instance.to_dict()
# create an instance of ModelsAPIKeyWithToken from a dict
models_api_key_with_token_from_dict = ModelsAPIKeyWithToken.from_dict(models_api_key_with_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


