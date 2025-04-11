# ModelsBillingProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_email** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**features** | **List[str]** |  | [optional] 
**id** | **str** |  | [optional] 
**is_default** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**recurring_cost_cents** | **int** |  | [optional] 
**recurring_frequency** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 
**usage_unit** | **str** |  | [optional] 
**usage_unit_cost_cents** | **int** |  | [optional] 

## Example

```python
from monad.models.models_billing_product import ModelsBillingProduct

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsBillingProduct from a JSON string
models_billing_product_instance = ModelsBillingProduct.from_json(json)
# print the JSON string representation of the object
print(ModelsBillingProduct.to_json())

# convert the object into a dict
models_billing_product_dict = models_billing_product_instance.to_dict()
# create an instance of ModelsBillingProduct from a dict
models_billing_product_from_dict = ModelsBillingProduct.from_dict(models_billing_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


