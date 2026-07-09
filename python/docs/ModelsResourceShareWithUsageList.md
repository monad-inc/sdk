# ModelsResourceShareWithUsageList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_shares** | [**List[ModelsResourceShareWithUsage]**](ModelsResourceShareWithUsage.md) | The shares of a single resource, each with its usage flag. | [optional] 
**share_with_all_new_children** | **bool** | Whether the resource&#39;s policy auto-shares it with new direct children. | [optional] 

## Example

```python
from monad.models.models_resource_share_with_usage_list import ModelsResourceShareWithUsageList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsResourceShareWithUsageList from a JSON string
models_resource_share_with_usage_list_instance = ModelsResourceShareWithUsageList.from_json(json)
# print the JSON string representation of the object
print(ModelsResourceShareWithUsageList.to_json())

# convert the object into a dict
models_resource_share_with_usage_list_dict = models_resource_share_with_usage_list_instance.to_dict()
# create an instance of ModelsResourceShareWithUsageList from a dict
models_resource_share_with_usage_list_from_dict = ModelsResourceShareWithUsageList.from_dict(models_resource_share_with_usage_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


