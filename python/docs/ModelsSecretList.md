# ModelsSecretList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**secrets** | [**List[ModelsSecret]**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.models_secret_list import ModelsSecretList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsSecretList from a JSON string
models_secret_list_instance = ModelsSecretList.from_json(json)
# print the JSON string representation of the object
print(ModelsSecretList.to_json())

# convert the object into a dict
models_secret_list_dict = models_secret_list_instance.to_dict()
# create an instance of ModelsSecretList from a dict
models_secret_list_from_dict = ModelsSecretList.from_dict(models_secret_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


