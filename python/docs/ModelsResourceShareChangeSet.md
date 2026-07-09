# ModelsResourceShareChangeSet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | [**List[ModelsResourceShare]**](ModelsResourceShare.md) | Shares newly created by the request. | [optional] 
**revoked** | [**List[ModelsResourceShare]**](ModelsResourceShare.md) | Shares revoked (deleted) by the request. | [optional] 
**share_with_all_new_children** | **bool** | The resource&#39;s auto-share policy state after the request. | [optional] 

## Example

```python
from monad.models.models_resource_share_change_set import ModelsResourceShareChangeSet

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsResourceShareChangeSet from a JSON string
models_resource_share_change_set_instance = ModelsResourceShareChangeSet.from_json(json)
# print the JSON string representation of the object
print(ModelsResourceShareChangeSet.to_json())

# convert the object into a dict
models_resource_share_change_set_dict = models_resource_share_change_set_instance.to_dict()
# create an instance of ModelsResourceShareChangeSet from a dict
models_resource_share_change_set_from_dict = ModelsResourceShareChangeSet.from_dict(models_resource_share_change_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


