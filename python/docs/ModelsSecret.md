# ModelsSecret

Token for the Wiz API. This is required to authenticate requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | When the secret was created | [optional] 
**description** | **str** | The user set Description of the secret | [optional] 
**id** | **str** | The ID of the secret | [optional] 
**name** | **str** | The user set Name of the secret | [optional] 
**organization_id** | **str** | The OrganizationID the secret belongs to | [optional] 
**updated_at** | **str** | When the secret was updated | [optional] 
**value** | **str** | The value of the secret. This will never be returned to the client but can be used to set new values when used in a request payload. | [optional] 

## Example

```python
from monad.models.models_secret import ModelsSecret

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsSecret from a JSON string
models_secret_instance = ModelsSecret.from_json(json)
# print the JSON string representation of the object
print(ModelsSecret.to_json())

# convert the object into a dict
models_secret_dict = models_secret_instance.to_dict()
# create an instance of ModelsSecret from a dict
models_secret_from_dict = ModelsSecret.from_dict(models_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


