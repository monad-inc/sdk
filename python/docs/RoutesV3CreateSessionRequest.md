# RoutesV3CreateSessionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization_id** | **str** |  | [optional] 
**ttl_seconds** | **int** |  | [optional] 

## Example

```python
from monad.models.routes_v3_create_session_request import RoutesV3CreateSessionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3CreateSessionRequest from a JSON string
routes_v3_create_session_request_instance = RoutesV3CreateSessionRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV3CreateSessionRequest.to_json())

# convert the object into a dict
routes_v3_create_session_request_dict = routes_v3_create_session_request_instance.to_dict()
# create an instance of RoutesV3CreateSessionRequest from a dict
routes_v3_create_session_request_from_dict = RoutesV3CreateSessionRequest.from_dict(routes_v3_create_session_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


