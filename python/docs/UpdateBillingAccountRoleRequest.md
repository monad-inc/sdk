# UpdateBillingAccountRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the role | [optional] 
**name** | **str** | Name of the role | [optional] 
**permissions** | **List[str]** | Permission slugs for the role | [optional] 

## Example

```python
from monad.models.update_billing_account_role_request import UpdateBillingAccountRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBillingAccountRoleRequest from a JSON string
update_billing_account_role_request_instance = UpdateBillingAccountRoleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBillingAccountRoleRequest.to_json())

# convert the object into a dict
update_billing_account_role_request_dict = update_billing_account_role_request_instance.to_dict()
# create an instance of UpdateBillingAccountRoleRequest from a dict
update_billing_account_role_request_from_dict = UpdateBillingAccountRoleRequest.from_dict(update_billing_account_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


