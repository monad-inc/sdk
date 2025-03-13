# RoutesV2UpdateBillingAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_email** | **str** | Email address for billing | [optional] 
**description** | **str** | Description of the billing account | [optional] 
**name** | **str** | Name of the billing account | [optional] 

## Example

```python
from monad.models.routes_v2_update_billing_account_request import RoutesV2UpdateBillingAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2UpdateBillingAccountRequest from a JSON string
routes_v2_update_billing_account_request_instance = RoutesV2UpdateBillingAccountRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2UpdateBillingAccountRequest.to_json())

# convert the object into a dict
routes_v2_update_billing_account_request_dict = routes_v2_update_billing_account_request_instance.to_dict()
# create an instance of RoutesV2UpdateBillingAccountRequest from a dict
routes_v2_update_billing_account_request_from_dict = RoutesV2UpdateBillingAccountRequest.from_dict(routes_v2_update_billing_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


