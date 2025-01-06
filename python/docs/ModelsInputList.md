# ModelsInputList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**List[ModelsInput]**](ModelsInput.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.models_input_list import ModelsInputList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsInputList from a JSON string
models_input_list_instance = ModelsInputList.from_json(json)
# print the JSON string representation of the object
print(ModelsInputList.to_json())

# convert the object into a dict
models_input_list_dict = models_input_list_instance.to_dict()
# create an instance of ModelsInputList from a dict
models_input_list_from_dict = ModelsInputList.from_dict(models_input_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


