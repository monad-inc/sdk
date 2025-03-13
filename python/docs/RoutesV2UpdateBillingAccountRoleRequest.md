# RoutesV2UpdateBillingAccountRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the role | [optional] 
**name** | **str** | Name of the role | [optional] 
**permissions** | **List[str]** | Permission slugs for the role | [optional] 

## Example

```python
from monad.models.routes_v2_update_billing_account_role_request import RoutesV2UpdateBillingAccountRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2UpdateBillingAccountRoleRequest from a JSON string
routes_v2_update_billing_account_role_request_instance = RoutesV2UpdateBillingAccountRoleRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2UpdateBillingAccountRoleRequest.to_json())

# convert the object into a dict
routes_v2_update_billing_account_role_request_dict = routes_v2_update_billing_account_role_request_instance.to_dict()
# create an instance of RoutesV2UpdateBillingAccountRoleRequest from a dict
routes_v2_update_billing_account_role_request_from_dict = RoutesV2UpdateBillingAccountRoleRequest.from_dict(routes_v2_update_billing_account_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


