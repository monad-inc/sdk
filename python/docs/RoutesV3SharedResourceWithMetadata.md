# RoutesV3SharedResourceWithMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_type** | **str** | Component kind (input/output/transform/enrichment); components only. | [optional] 
**description** | **str** | Description of the resource, when set. | [optional] 
**explicit_target_count** | **int** | Number of explicit per-child share rows for this resource. | [optional] 
**last_shared_at** | **str** | Most recent time any share row for this resource was created. | [optional] 
**name** | **str** | Name of the resource. | [optional] 
**resource_id** | **str** | Identifier of the shared secret or component. | [optional] 
**resource_metadata** | [**RoutesResourceMetadata**](RoutesResourceMetadata.md) |  | [optional] 
**resource_type** | **str** | Type of the shared resource: \&quot;secret\&quot; or \&quot;component\&quot;. | [optional] 
**share_with_all_new_children** | **bool** | Whether the resource&#39;s policy auto-shares it with new direct children. | [optional] 
**sub_type** | **str** | Concrete connector kind; components only. | [optional] 

## Example

```python
from monad.models.routes_v3_shared_resource_with_metadata import RoutesV3SharedResourceWithMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3SharedResourceWithMetadata from a JSON string
routes_v3_shared_resource_with_metadata_instance = RoutesV3SharedResourceWithMetadata.from_json(json)
# print the JSON string representation of the object
print(RoutesV3SharedResourceWithMetadata.to_json())

# convert the object into a dict
routes_v3_shared_resource_with_metadata_dict = routes_v3_shared_resource_with_metadata_instance.to_dict()
# create an instance of RoutesV3SharedResourceWithMetadata from a dict
routes_v3_shared_resource_with_metadata_from_dict = RoutesV3SharedResourceWithMetadata.from_dict(routes_v3_shared_resource_with_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


