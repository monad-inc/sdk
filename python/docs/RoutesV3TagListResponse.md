# RoutesV3TagListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**tags** | [**List[RoutesV3TagResponse]**](RoutesV3TagResponse.md) |  | [optional] 

## Example

```python
from monad.models.routes_v3_tag_list_response import RoutesV3TagListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3TagListResponse from a JSON string
routes_v3_tag_list_response_instance = RoutesV3TagListResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3TagListResponse.to_json())

# convert the object into a dict
routes_v3_tag_list_response_dict = routes_v3_tag_list_response_instance.to_dict()
# create an instance of RoutesV3TagListResponse from a dict
routes_v3_tag_list_response_from_dict = RoutesV3TagListResponse.from_dict(routes_v3_tag_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


