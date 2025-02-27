# ModelsSecretWithComponents


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | When the secret was created | [optional] 
**description** | **str** | The user set Description of the secret | [optional] 
**id** | **str** | The ID of the secret | [optional] 
**inputs** | [**List[ModelsComponentReference]**](ModelsComponentReference.md) |  | [optional] 
**name** | **str** | The user set Name of the secret | [optional] 
**organization_id** | **str** | The OrganizationID the secret belongs to | [optional] 
**outputs** | [**List[ModelsComponentReference]**](ModelsComponentReference.md) |  | [optional] 
**updated_at** | **str** | When the secret was updated | [optional] 
**value** | **str** | The value of the secret. This will never be returned to the client but can be used to set new values when used in a request payload. | [optional] 

## Example

```python
from monad.models.models_secret_with_components import ModelsSecretWithComponents

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsSecretWithComponents from a JSON string
models_secret_with_components_instance = ModelsSecretWithComponents.from_json(json)
# print the JSON string representation of the object
print(ModelsSecretWithComponents.to_json())

# convert the object into a dict
models_secret_with_components_dict = models_secret_with_components_instance.to_dict()
# create an instance of ModelsSecretWithComponents from a dict
models_secret_with_components_from_dict = ModelsSecretWithComponents.from_dict(models_secret_with_components_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


