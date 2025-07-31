# RoutesV3CreateConnectionUserRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_email** | **str** | Email of the user | 

## Example

```python
from monad.models.routes_v3_create_connection_user_role_request import RoutesV3CreateConnectionUserRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3CreateConnectionUserRoleRequest from a JSON string
routes_v3_create_connection_user_role_request_instance = RoutesV3CreateConnectionUserRoleRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV3CreateConnectionUserRoleRequest.to_json())

# convert the object into a dict
routes_v3_create_connection_user_role_request_dict = routes_v3_create_connection_user_role_request_instance.to_dict()
# create an instance of RoutesV3CreateConnectionUserRoleRequest from a dict
routes_v3_create_connection_user_role_request_from_dict = RoutesV3CreateConnectionUserRoleRequest.from_dict(routes_v3_create_connection_user_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


