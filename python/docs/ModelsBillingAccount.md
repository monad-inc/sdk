# ModelsBillingAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_email** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**has_payment_method** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**next_product** | [**ModelsBillingProduct**](ModelsBillingProduct.md) |  | [optional] 
**next_product_id** | **str** |  | [optional] 
**product** | [**ModelsBillingProduct**](ModelsBillingProduct.md) |  | [optional] 
**product_change_after** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_billing_account import ModelsBillingAccount

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsBillingAccount from a JSON string
models_billing_account_instance = ModelsBillingAccount.from_json(json)
# print the JSON string representation of the object
print(ModelsBillingAccount.to_json())

# convert the object into a dict
models_billing_account_dict = models_billing_account_instance.to_dict()
# create an instance of ModelsBillingAccount from a dict
models_billing_account_from_dict = ModelsBillingAccount.from_dict(models_billing_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


