# ModelsSharedResourceList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**shared_resources** | [**List[ModelsSharedResource]**](ModelsSharedResource.md) | The page of shared resources. | [optional] 

## Example

```python
from monad.models.models_shared_resource_list import ModelsSharedResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsSharedResourceList from a JSON string
models_shared_resource_list_instance = ModelsSharedResourceList.from_json(json)
# print the JSON string representation of the object
print(ModelsSharedResourceList.to_json())

# convert the object into a dict
models_shared_resource_list_dict = models_shared_resource_list_instance.to_dict()
# create an instance of ModelsSharedResourceList from a dict
models_shared_resource_list_from_dict = ModelsSharedResourceList.from_dict(models_shared_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


