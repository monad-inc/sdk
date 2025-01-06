# RoutesAddUserToOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_id** | **str** |  | 
**user_id** | **str** |  | 

## Example

```python
from monad.models.routes_add_user_to_organization_request import RoutesAddUserToOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesAddUserToOrganizationRequest from a JSON string
routes_add_user_to_organization_request_instance = RoutesAddUserToOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesAddUserToOrganizationRequest.to_json())

# convert the object into a dict
routes_add_user_to_organization_request_dict = routes_add_user_to_organization_request_instance.to_dict()
# create an instance of RoutesAddUserToOrganizationRequest from a dict
routes_add_user_to_organization_request_from_dict = RoutesAddUserToOrganizationRequest.from_dict(routes_add_user_to_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


