# RoutesV2CreateBillingAccountSubscriptionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkout_url** | **str** | CheckoutURL is a secure URL to add payment information and subscribe to the product | [optional] 

## Example

```python
from monad.models.routes_v2_create_billing_account_subscription_response import RoutesV2CreateBillingAccountSubscriptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2CreateBillingAccountSubscriptionResponse from a JSON string
routes_v2_create_billing_account_subscription_response_instance = RoutesV2CreateBillingAccountSubscriptionResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV2CreateBillingAccountSubscriptionResponse.to_json())

# convert the object into a dict
routes_v2_create_billing_account_subscription_response_dict = routes_v2_create_billing_account_subscription_response_instance.to_dict()
# create an instance of RoutesV2CreateBillingAccountSubscriptionResponse from a dict
routes_v2_create_billing_account_subscription_response_from_dict = RoutesV2CreateBillingAccountSubscriptionResponse.from_dict(routes_v2_create_billing_account_subscription_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


