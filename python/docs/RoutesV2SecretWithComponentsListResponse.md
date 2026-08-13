# RoutesV2SecretWithComponentsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**secrets** | [**List[RoutesV2SecretWithComponentsResponse]**](RoutesV2SecretWithComponentsResponse.md) |  | [optional] 

## Example

```python
from monad.models.routes_v2_secret_with_components_list_response import RoutesV2SecretWithComponentsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2SecretWithComponentsListResponse from a JSON string
routes_v2_secret_with_components_list_response_instance = RoutesV2SecretWithComponentsListResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV2SecretWithComponentsListResponse.to_json())

# convert the object into a dict
routes_v2_secret_with_components_list_response_dict = routes_v2_secret_with_components_list_response_instance.to_dict()
# create an instance of RoutesV2SecretWithComponentsListResponse from a dict
routes_v2_secret_with_components_list_response_from_dict = RoutesV2SecretWithComponentsListResponse.from_dict(routes_v2_secret_with_components_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


