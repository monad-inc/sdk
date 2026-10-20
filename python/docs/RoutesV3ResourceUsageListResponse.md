# RoutesV3ResourceUsageListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**usages** | [**List[RoutesV3ResourceUsageWithMetadata]**](RoutesV3ResourceUsageWithMetadata.md) |  | [optional] 

## Example

```python
from monad.models.routes_v3_resource_usage_list_response import RoutesV3ResourceUsageListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3ResourceUsageListResponse from a JSON string
routes_v3_resource_usage_list_response_instance = RoutesV3ResourceUsageListResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3ResourceUsageListResponse.to_json())

# convert the object into a dict
routes_v3_resource_usage_list_response_dict = routes_v3_resource_usage_list_response_instance.to_dict()
# create an instance of RoutesV3ResourceUsageListResponse from a dict
routes_v3_resource_usage_list_response_from_dict = RoutesV3ResourceUsageListResponse.from_dict(routes_v3_resource_usage_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


