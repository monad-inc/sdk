# ModelsResourceShareTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_use** | **bool** | Whether the child is actively using the resource (references a shared secret, or binds a shared component in a pipeline node). Always false when not shared. | [optional] 
**name** | **str** | Friendly name of the child organization. | [optional] 
**organization_id** | **str** | The direct child organization. | [optional] 
**shared** | **bool** | Whether the resource is currently shared to this child. | [optional] 
**shared_at** | **str** | When the share was created; nil when not shared. | [optional] 

## Example

```python
from monad.models.models_resource_share_target import ModelsResourceShareTarget

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsResourceShareTarget from a JSON string
models_resource_share_target_instance = ModelsResourceShareTarget.from_json(json)
# print the JSON string representation of the object
print(ModelsResourceShareTarget.to_json())

# convert the object into a dict
models_resource_share_target_dict = models_resource_share_target_instance.to_dict()
# create an instance of ModelsResourceShareTarget from a dict
models_resource_share_target_from_dict = ModelsResourceShareTarget.from_dict(models_resource_share_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


