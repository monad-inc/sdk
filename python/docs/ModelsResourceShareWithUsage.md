# ModelsResourceShareWithUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | When the share was created. | [optional] 
**id** | **str** | Unique identifier of the share. | [optional] 
**in_use** | **bool** | Whether the target org is using the shared resource. | [optional] 
**owner_organization_id** | **str** | Organization that owns the shared resource (the parent org). | [optional] 
**resource_id** | **str** | Identifier of the shared secret or component. | [optional] 
**resource_type** | **str** | Type of the shared resource: \&quot;secret\&quot; or \&quot;component\&quot;. | [optional] 
**target_organization_id** | **str** | Direct child the resource is shared with. | [optional] 
**target_organization_name** | **str** | Friendly name of the target org. | [optional] 

## Example

```python
from monad.models.models_resource_share_with_usage import ModelsResourceShareWithUsage

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsResourceShareWithUsage from a JSON string
models_resource_share_with_usage_instance = ModelsResourceShareWithUsage.from_json(json)
# print the JSON string representation of the object
print(ModelsResourceShareWithUsage.to_json())

# convert the object into a dict
models_resource_share_with_usage_dict = models_resource_share_with_usage_instance.to_dict()
# create an instance of ModelsResourceShareWithUsage from a dict
models_resource_share_with_usage_from_dict = ModelsResourceShareWithUsage.from_dict(models_resource_share_with_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


