# RoutesV2CreateBillingAccountRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the role | [optional] 
**name** | **str** | Name of the role | 
**permissions** | **List[str]** | Permission slugs for the role | 

## Example

```python
from monad.models.routes_v2_create_billing_account_role_request import RoutesV2CreateBillingAccountRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2CreateBillingAccountRoleRequest from a JSON string
routes_v2_create_billing_account_role_request_instance = RoutesV2CreateBillingAccountRoleRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2CreateBillingAccountRoleRequest.to_json())

# convert the object into a dict
routes_v2_create_billing_account_role_request_dict = routes_v2_create_billing_account_role_request_instance.to_dict()
# create an instance of RoutesV2CreateBillingAccountRoleRequest from a dict
routes_v2_create_billing_account_role_request_from_dict = RoutesV2CreateBillingAccountRoleRequest.from_dict(routes_v2_create_billing_account_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


