# ModelsTransformsRepositoryList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**transforms** | [**List[ModelsTransformsRepositoryTransform]**](ModelsTransformsRepositoryTransform.md) |  | [optional] 

## Example

```python
from monad.models.models_transforms_repository_list import ModelsTransformsRepositoryList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsTransformsRepositoryList from a JSON string
models_transforms_repository_list_instance = ModelsTransformsRepositoryList.from_json(json)
# print the JSON string representation of the object
print(ModelsTransformsRepositoryList.to_json())

# convert the object into a dict
models_transforms_repository_list_dict = models_transforms_repository_list_instance.to_dict()
# create an instance of ModelsTransformsRepositoryList from a dict
models_transforms_repository_list_from_dict = ModelsTransformsRepositoryList.from_dict(models_transforms_repository_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


