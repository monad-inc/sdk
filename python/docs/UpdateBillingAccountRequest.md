# UpdateBillingAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_email** | **str** | Email address for billing. Nil preserves the current value. | [optional] 
**description** | **str** | Description of the billing account. Nil preserves the current value. | [optional] 
**name** | **str** | Name of the billing account. Nil preserves the current value. | [optional] 

## Example

```python
from monad.models.update_billing_account_request import UpdateBillingAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBillingAccountRequest from a JSON string
update_billing_account_request_instance = UpdateBillingAccountRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBillingAccountRequest.to_json())

# convert the object into a dict
update_billing_account_request_dict = update_billing_account_request_instance.to_dict()
# create an instance of UpdateBillingAccountRequest from a dict
update_billing_account_request_from_dict = UpdateBillingAccountRequest.from_dict(update_billing_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


