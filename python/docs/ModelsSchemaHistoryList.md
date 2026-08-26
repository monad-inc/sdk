# ModelsSchemaHistoryList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**schema_history** | [**List[ModelsSchemaHistory]**](ModelsSchemaHistory.md) |  | [optional] 

## Example

```python
from monad.models.models_schema_history_list import ModelsSchemaHistoryList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsSchemaHistoryList from a JSON string
models_schema_history_list_instance = ModelsSchemaHistoryList.from_json(json)
# print the JSON string representation of the object
print(ModelsSchemaHistoryList.to_json())

# convert the object into a dict
models_schema_history_list_dict = models_schema_history_list_instance.to_dict()
# create an instance of ModelsSchemaHistoryList from a dict
models_schema_history_list_from_dict = ModelsSchemaHistoryList.from_dict(models_schema_history_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


