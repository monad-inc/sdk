# CreateBillingAccountSubscriptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **str** | ProductID is the ID of the product to subscribe to | 

## Example

```python
from monad.models.create_billing_account_subscription_request import CreateBillingAccountSubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBillingAccountSubscriptionRequest from a JSON string
create_billing_account_subscription_request_instance = CreateBillingAccountSubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBillingAccountSubscriptionRequest.to_json())

# convert the object into a dict
create_billing_account_subscription_request_dict = create_billing_account_subscription_request_instance.to_dict()
# create an instance of CreateBillingAccountSubscriptionRequest from a dict
create_billing_account_subscription_request_from_dict = CreateBillingAccountSubscriptionRequest.from_dict(create_billing_account_subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


