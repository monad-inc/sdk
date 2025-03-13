# RoutesV2CreateBillingAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_email** | **str** | Email address for billing | 
**description** | **str** | Description of the billing account | [optional] 
**name** | **str** | Name of the billing account | 

## Example

```python
from monad.models.routes_v2_create_billing_account_request import RoutesV2CreateBillingAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2CreateBillingAccountRequest from a JSON string
routes_v2_create_billing_account_request_instance = RoutesV2CreateBillingAccountRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2CreateBillingAccountRequest.to_json())

# convert the object into a dict
routes_v2_create_billing_account_request_dict = routes_v2_create_billing_account_request_instance.to_dict()
# create an instance of RoutesV2CreateBillingAccountRequest from a dict
routes_v2_create_billing_account_request_from_dict = RoutesV2CreateBillingAccountRequest.from_dict(routes_v2_create_billing_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


