# ModelsOutputList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outputs** | [**List[ModelsOutput]**](ModelsOutput.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.models_output_list import ModelsOutputList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsOutputList from a JSON string
models_output_list_instance = ModelsOutputList.from_json(json)
# print the JSON string representation of the object
print(ModelsOutputList.to_json())

# convert the object into a dict
models_output_list_dict = models_output_list_instance.to_dict()
# create an instance of ModelsOutputList from a dict
models_output_list_from_dict = ModelsOutputList.from_dict(models_output_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


