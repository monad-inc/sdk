# RoutesV2UpdateAPIKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from monad.models.routes_v2_update_api_key_request import RoutesV2UpdateAPIKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2UpdateAPIKeyRequest from a JSON string
routes_v2_update_api_key_request_instance = RoutesV2UpdateAPIKeyRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2UpdateAPIKeyRequest.to_json())

# convert the object into a dict
routes_v2_update_api_key_request_dict = routes_v2_update_api_key_request_instance.to_dict()
# create an instance of RoutesV2UpdateAPIKeyRequest from a dict
routes_v2_update_api_key_request_from_dict = RoutesV2UpdateAPIKeyRequest.from_dict(routes_v2_update_api_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


