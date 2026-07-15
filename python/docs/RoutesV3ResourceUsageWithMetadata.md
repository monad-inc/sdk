# RoutesV3ResourceUsageWithMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_type** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**organization_name** | **str** |  | [optional] 
**resource_id** | **str** |  | [optional] 
**resource_metadata** | [**RoutesResourceMetadata**](RoutesResourceMetadata.md) |  | [optional] 
**resource_type** | **str** |  | [optional] 
**sub_type** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_resource_usage_with_metadata import RoutesV3ResourceUsageWithMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3ResourceUsageWithMetadata from a JSON string
routes_v3_resource_usage_with_metadata_instance = RoutesV3ResourceUsageWithMetadata.from_json(json)
# print the JSON string representation of the object
print(RoutesV3ResourceUsageWithMetadata.to_json())

# convert the object into a dict
routes_v3_resource_usage_with_metadata_dict = routes_v3_resource_usage_with_metadata_instance.to_dict()
# create an instance of RoutesV3ResourceUsageWithMetadata from a dict
routes_v3_resource_usage_with_metadata_from_dict = RoutesV3ResourceUsageWithMetadata.from_dict(routes_v3_resource_usage_with_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


