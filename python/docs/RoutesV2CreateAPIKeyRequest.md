# RoutesV2CreateAPIKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**expiration_time** | **str** |  | 
**name** | **str** |  | 
**role_id** | **str** |  | 

## Example

```python
from monad.models.routes_v2_create_api_key_request import RoutesV2CreateAPIKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2CreateAPIKeyRequest from a JSON string
routes_v2_create_api_key_request_instance = RoutesV2CreateAPIKeyRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2CreateAPIKeyRequest.to_json())

# convert the object into a dict
routes_v2_create_api_key_request_dict = routes_v2_create_api_key_request_instance.to_dict()
# create an instance of RoutesV2CreateAPIKeyRequest from a dict
routes_v2_create_api_key_request_from_dict = RoutesV2CreateAPIKeyRequest.from_dict(routes_v2_create_api_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


