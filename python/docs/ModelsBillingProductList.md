# ModelsBillingProductList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_products** | [**List[ModelsBillingProduct]**](ModelsBillingProduct.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.models_billing_product_list import ModelsBillingProductList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsBillingProductList from a JSON string
models_billing_product_list_instance = ModelsBillingProductList.from_json(json)
# print the JSON string representation of the object
print(ModelsBillingProductList.to_json())

# convert the object into a dict
models_billing_product_list_dict = models_billing_product_list_instance.to_dict()
# create an instance of ModelsBillingProductList from a dict
models_billing_product_list_from_dict = ModelsBillingProductList.from_dict(models_billing_product_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


