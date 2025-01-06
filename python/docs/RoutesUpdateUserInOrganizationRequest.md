# RoutesUpdateUserInOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_id** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_update_user_in_organization_request import RoutesUpdateUserInOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesUpdateUserInOrganizationRequest from a JSON string
routes_update_user_in_organization_request_instance = RoutesUpdateUserInOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesUpdateUserInOrganizationRequest.to_json())

# convert the object into a dict
routes_update_user_in_organization_request_dict = routes_update_user_in_organization_request_instance.to_dict()
# create an instance of RoutesUpdateUserInOrganizationRequest from a dict
routes_update_user_in_organization_request_from_dict = RoutesUpdateUserInOrganizationRequest.from_dict(routes_update_user_in_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


