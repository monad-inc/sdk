# ModelsSecretWithComponentsList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**secrets** | [**List[ModelsSecretWithComponents]**](ModelsSecretWithComponents.md) |  | [optional] 

## Example

```python
from monad.models.models_secret_with_components_list import ModelsSecretWithComponentsList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsSecretWithComponentsList from a JSON string
models_secret_with_components_list_instance = ModelsSecretWithComponentsList.from_json(json)
# print the JSON string representation of the object
print(ModelsSecretWithComponentsList.to_json())

# convert the object into a dict
models_secret_with_components_list_dict = models_secret_with_components_list_instance.to_dict()
# create an instance of ModelsSecretWithComponentsList from a dict
models_secret_with_components_list_from_dict = ModelsSecretWithComponentsList.from_dict(models_secret_with_components_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


