# RoutesV3SharedResourceListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**shared_resources** | [**List[RoutesV3SharedResourceWithMetadata]**](RoutesV3SharedResourceWithMetadata.md) |  | [optional] 

## Example

```python
from monad.models.routes_v3_shared_resource_list_response import RoutesV3SharedResourceListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3SharedResourceListResponse from a JSON string
routes_v3_shared_resource_list_response_instance = RoutesV3SharedResourceListResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3SharedResourceListResponse.to_json())

# convert the object into a dict
routes_v3_shared_resource_list_response_dict = routes_v3_shared_resource_list_response_instance.to_dict()
# create an instance of RoutesV3SharedResourceListResponse from a dict
routes_v3_shared_resource_list_response_from_dict = RoutesV3SharedResourceListResponse.from_dict(routes_v3_shared_resource_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


