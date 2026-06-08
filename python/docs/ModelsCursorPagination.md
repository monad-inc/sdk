# ModelsCursorPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** |  | [optional] 
**next_cursor** | **str** |  | [optional] 

## Example

```python
from monad.models.models_cursor_pagination import ModelsCursorPagination

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsCursorPagination from a JSON string
models_cursor_pagination_instance = ModelsCursorPagination.from_json(json)
# print the JSON string representation of the object
print(ModelsCursorPagination.to_json())

# convert the object into a dict
models_cursor_pagination_dict = models_cursor_pagination_instance.to_dict()
# create an instance of ModelsCursorPagination from a dict
models_cursor_pagination_from_dict = ModelsCursorPagination.from_dict(models_cursor_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


