# RoutesInviteUserToOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**role_id** | **str** |  | 

## Example

```python
from monad.models.routes_invite_user_to_organization_request import RoutesInviteUserToOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesInviteUserToOrganizationRequest from a JSON string
routes_invite_user_to_organization_request_instance = RoutesInviteUserToOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesInviteUserToOrganizationRequest.to_json())

# convert the object into a dict
routes_invite_user_to_organization_request_dict = routes_invite_user_to_organization_request_instance.to_dict()
# create an instance of RoutesInviteUserToOrganizationRequest from a dict
routes_invite_user_to_organization_request_from_dict = RoutesInviteUserToOrganizationRequest.from_dict(routes_invite_user_to_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


