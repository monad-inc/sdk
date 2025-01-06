# ModelsAPIKeyList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_keys** | [**List[ModelsAPIKey]**](ModelsAPIKey.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.models_api_key_list import ModelsAPIKeyList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsAPIKeyList from a JSON string
models_api_key_list_instance = ModelsAPIKeyList.from_json(json)
# print the JSON string representation of the object
print(ModelsAPIKeyList.to_json())

# convert the object into a dict
models_api_key_list_dict = models_api_key_list_instance.to_dict()
# create an instance of ModelsAPIKeyList from a dict
models_api_key_list_from_dict = ModelsAPIKeyList.from_dict(models_api_key_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


