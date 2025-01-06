# ModelsPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from monad.models.models_pagination import ModelsPagination

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPagination from a JSON string
models_pagination_instance = ModelsPagination.from_json(json)
# print the JSON string representation of the object
print(ModelsPagination.to_json())

# convert the object into a dict
models_pagination_dict = models_pagination_instance.to_dict()
# create an instance of ModelsPagination from a dict
models_pagination_from_dict = ModelsPagination.from_dict(models_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


