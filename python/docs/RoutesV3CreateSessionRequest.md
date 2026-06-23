# RoutesV3CreateSessionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization_id** | **str** | OrganizationID, when set, pins the token to that single org via the &#x60;scoped_org&#x60; claim. Omit to inherit the parent key&#39;s org access. Not verified at mint time — the org-access middleware returns 403 at request time if the parent key has no role in it. | [optional] 
**ttl_seconds** | **int** | TTLSeconds is the requested session lifetime in seconds. Defaults to 1800 (30 min). Clamped to [300, 3600] (5 min – 1 hr); a value that would outlive the parent API key is rejected with 400. | [optional] 

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


