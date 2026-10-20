# ModelsResourceShareTargetList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizations** | [**List[ModelsResourceShareTarget]**](ModelsResourceShareTarget.md) | The page of child orgs. | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**share_with_all_new_children** | **bool** | Whether the resource&#39;s policy auto-shares it with new direct children. | [optional] 

## Example

```python
from monad.models.models_resource_share_target_list import ModelsResourceShareTargetList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsResourceShareTargetList from a JSON string
models_resource_share_target_list_instance = ModelsResourceShareTargetList.from_json(json)
# print the JSON string representation of the object
print(ModelsResourceShareTargetList.to_json())

# convert the object into a dict
models_resource_share_target_list_dict = models_resource_share_target_list_instance.to_dict()
# create an instance of ModelsResourceShareTargetList from a dict
models_resource_share_target_list_from_dict = ModelsResourceShareTargetList.from_dict(models_resource_share_target_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


