# ModelsTransformList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**transforms** | [**List[ModelsTransform]**](ModelsTransform.md) |  | [optional] 

## Example

```python
from monad.models.models_transform_list import ModelsTransformList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsTransformList from a JSON string
models_transform_list_instance = ModelsTransformList.from_json(json)
# print the JSON string representation of the object
print(ModelsTransformList.to_json())

# convert the object into a dict
models_transform_list_dict = models_transform_list_instance.to_dict()
# create an instance of ModelsTransformList from a dict
models_transform_list_from_dict = ModelsTransformList.from_dict(models_transform_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


