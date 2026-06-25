# ModelsAPIKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**expiration_time** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**jwt_signing_key_id** | **str** | JWTSigningKeyID is the jwt_signing_keys row that signed the key&#39;s current token. Re-stamped on rotation. Empty when signed via the legacy HS256 path (no signing-key row), or for keys created before this was recorded. | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**role_id** | **str** |  | [optional] 
**token_version** | **int** | TokenVersion is the current generation of the key. It is embedded in minted JWTs as the &#x60;ver&#x60; claim and bumped on rotation to invalidate previously-issued tokens without changing the key&#39;s id. | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_api_key import ModelsAPIKey

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsAPIKey from a JSON string
models_api_key_instance = ModelsAPIKey.from_json(json)
# print the JSON string representation of the object
print(ModelsAPIKey.to_json())

# convert the object into a dict
models_api_key_dict = models_api_key_instance.to_dict()
# create an instance of ModelsAPIKey from a dict
models_api_key_from_dict = ModelsAPIKey.from_dict(models_api_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


