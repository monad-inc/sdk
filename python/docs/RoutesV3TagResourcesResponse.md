# RoutesV3TagResourcesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**resources** | [**List[DatastoreTaggedResource]**](DatastoreTaggedResource.md) |  | [optional] 

## Example

```python
from monad.models.routes_v3_tag_resources_response import RoutesV3TagResourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3TagResourcesResponse from a JSON string
routes_v3_tag_resources_response_instance = RoutesV3TagResourcesResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3TagResourcesResponse.to_json())

# convert the object into a dict
routes_v3_tag_resources_response_dict = routes_v3_tag_resources_response_instance.to_dict()
# create an instance of RoutesV3TagResourcesResponse from a dict
routes_v3_tag_resources_response_from_dict = RoutesV3TagResourcesResponse.from_dict(routes_v3_tag_resources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


