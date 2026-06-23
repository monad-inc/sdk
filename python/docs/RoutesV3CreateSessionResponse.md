# RoutesV3CreateSessionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **str** | ExpiresAt is the token expiry as an RFC 3339 timestamp. | [optional] 
**session_token** | **str** | SessionToken is the minted short-lived JWT. Send it as a Bearer token. | [optional] 
**ttl_seconds** | **int** | TTLSeconds is the effective lifetime applied after clamping. | [optional] 

## Example

```python
from monad.models.routes_v3_create_session_response import RoutesV3CreateSessionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3CreateSessionResponse from a JSON string
routes_v3_create_session_response_instance = RoutesV3CreateSessionResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3CreateSessionResponse.to_json())

# convert the object into a dict
routes_v3_create_session_response_dict = routes_v3_create_session_response_instance.to_dict()
# create an instance of RoutesV3CreateSessionResponse from a dict
routes_v3_create_session_response_from_dict = RoutesV3CreateSessionResponse.from_dict(routes_v3_create_session_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


