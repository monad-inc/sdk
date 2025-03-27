# RoutesV2CreateBillingAccountSubscriptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **str** | ProductID is the ID of the product to subscribe to | 

## Example

```python
from monad.models.routes_v2_create_billing_account_subscription_request import RoutesV2CreateBillingAccountSubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2CreateBillingAccountSubscriptionRequest from a JSON string
routes_v2_create_billing_account_subscription_request_instance = RoutesV2CreateBillingAccountSubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2CreateBillingAccountSubscriptionRequest.to_json())

# convert the object into a dict
routes_v2_create_billing_account_subscription_request_dict = routes_v2_create_billing_account_subscription_request_instance.to_dict()
# create an instance of RoutesV2CreateBillingAccountSubscriptionRequest from a dict
routes_v2_create_billing_account_subscription_request_from_dict = RoutesV2CreateBillingAccountSubscriptionRequest.from_dict(routes_v2_create_billing_account_subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


