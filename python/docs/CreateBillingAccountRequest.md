# CreateBillingAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_email** | **str** | Email address for billing | 
**description** | **str** | Description of the billing account | [optional] 
**name** | **str** | Name of the billing account | 

## Example

```python
from monad.models.create_billing_account_request import CreateBillingAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBillingAccountRequest from a JSON string
create_billing_account_request_instance = CreateBillingAccountRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBillingAccountRequest.to_json())

# convert the object into a dict
create_billing_account_request_dict = create_billing_account_request_instance.to_dict()
# create an instance of CreateBillingAccountRequest from a dict
create_billing_account_request_from_dict = CreateBillingAccountRequest.from_dict(create_billing_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


