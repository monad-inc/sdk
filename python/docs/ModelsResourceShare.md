# ModelsResourceShare


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | When the share was created. | [optional] 
**id** | **str** | Unique identifier of the share. | [optional] 
**owner_organization_id** | **str** | Organization that owns the shared resource (the parent org). | [optional] 
**resource_id** | **str** | Identifier of the shared secret or component. | [optional] 
**resource_type** | **str** | Type of the shared resource: \&quot;secret\&quot; or \&quot;component\&quot;. | [optional] 
**target_organization_id** | **str** | Direct child the resource is shared with. | [optional] 

## Example

```python
from monad.models.models_resource_share import ModelsResourceShare

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsResourceShare from a JSON string
models_resource_share_instance = ModelsResourceShare.from_json(json)
# print the JSON string representation of the object
print(ModelsResourceShare.to_json())

# convert the object into a dict
models_resource_share_dict = models_resource_share_instance.to_dict()
# create an instance of ModelsResourceShare from a dict
models_resource_share_from_dict = ModelsResourceShare.from_dict(models_resource_share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


