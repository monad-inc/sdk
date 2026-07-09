# ModelsSharedResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_type** | **str** | Component kind (input/output/transform/enrichment); components only. | [optional] 
**description** | **str** | Description of the resource, when set. | [optional] 
**explicit_target_count** | **int** | Number of explicit per-child share rows for this resource. | [optional] 
**last_shared_at** | **str** | Most recent time any share row for this resource was created. | [optional] 
**name** | **str** | Name of the resource. | [optional] 
**resource_id** | **str** | Identifier of the shared secret or component. | [optional] 
**resource_type** | **str** | Type of the shared resource: \&quot;secret\&quot; or \&quot;component\&quot;. | [optional] 
**share_with_all_new_children** | **bool** | Whether the resource&#39;s policy auto-shares it with new direct children. | [optional] 
**sub_type** | **str** | Concrete connector kind; components only. | [optional] 

## Example

```python
from monad.models.models_shared_resource import ModelsSharedResource

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsSharedResource from a JSON string
models_shared_resource_instance = ModelsSharedResource.from_json(json)
# print the JSON string representation of the object
print(ModelsSharedResource.to_json())

# convert the object into a dict
models_shared_resource_dict = models_shared_resource_instance.to_dict()
# create an instance of ModelsSharedResource from a dict
models_shared_resource_from_dict = ModelsSharedResource.from_dict(models_shared_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


