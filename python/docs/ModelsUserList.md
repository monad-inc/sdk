# ModelsUserList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**users** | [**List[ModelsUser]**](ModelsUser.md) |  | [optional] 

## Example

```python
from monad.models.models_user_list import ModelsUserList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsUserList from a JSON string
models_user_list_instance = ModelsUserList.from_json(json)
# print the JSON string representation of the object
print(ModelsUserList.to_json())

# convert the object into a dict
models_user_list_dict = models_user_list_instance.to_dict()
# create an instance of ModelsUserList from a dict
models_user_list_from_dict = ModelsUserList.from_dict(models_user_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


