# RoutesV3UpdateTagRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_update_tag_request import RoutesV3UpdateTagRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3UpdateTagRequest from a JSON string
routes_v3_update_tag_request_instance = RoutesV3UpdateTagRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV3UpdateTagRequest.to_json())

# convert the object into a dict
routes_v3_update_tag_request_dict = routes_v3_update_tag_request_instance.to_dict()
# create an instance of RoutesV3UpdateTagRequest from a dict
routes_v3_update_tag_request_from_dict = RoutesV3UpdateTagRequest.from_dict(routes_v3_update_tag_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


