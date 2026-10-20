# ModelsConnectionList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | [**List[ModelsConnection]**](ModelsConnection.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.models_connection_list import ModelsConnectionList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsConnectionList from a JSON string
models_connection_list_instance = ModelsConnectionList.from_json(json)
# print the JSON string representation of the object
print(ModelsConnectionList.to_json())

# convert the object into a dict
models_connection_list_dict = models_connection_list_instance.to_dict()
# create an instance of ModelsConnectionList from a dict
models_connection_list_from_dict = ModelsConnectionList.from_dict(models_connection_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


