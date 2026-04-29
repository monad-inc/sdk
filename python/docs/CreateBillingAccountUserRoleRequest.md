# CreateBillingAccountUserRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_email** | **str** | Email of the user | 

## Example

```python
from monad.models.create_billing_account_user_role_request import CreateBillingAccountUserRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBillingAccountUserRoleRequest from a JSON string
create_billing_account_user_role_request_instance = CreateBillingAccountUserRoleRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBillingAccountUserRoleRequest.to_json())

# convert the object into a dict
create_billing_account_user_role_request_dict = create_billing_account_user_role_request_instance.to_dict()
# create an instance of CreateBillingAccountUserRoleRequest from a dict
create_billing_account_user_role_request_from_dict = CreateBillingAccountUserRoleRequest.from_dict(create_billing_account_user_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


