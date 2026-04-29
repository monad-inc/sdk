# CreateBillingAccountRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the role | [optional] 
**name** | **str** | Name of the role | 
**permissions** | **List[str]** | Permission slugs for the role | 

## Example

```python
from monad.models.create_billing_account_role_request import CreateBillingAccountRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBillingAccountRoleRequest from a JSON string
create_billing_account_role_request_instance = CreateBillingAccountRoleRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBillingAccountRoleRequest.to_json())

# convert the object into a dict
create_billing_account_role_request_dict = create_billing_account_role_request_instance.to_dict()
# create an instance of CreateBillingAccountRoleRequest from a dict
create_billing_account_role_request_from_dict = CreateBillingAccountRoleRequest.from_dict(create_billing_account_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


