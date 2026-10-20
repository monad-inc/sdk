# ModelsBillingAccountList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_accounts** | [**List[ModelsBillingAccount]**](ModelsBillingAccount.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.models_billing_account_list import ModelsBillingAccountList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsBillingAccountList from a JSON string
models_billing_account_list_instance = ModelsBillingAccountList.from_json(json)
# print the JSON string representation of the object
print(ModelsBillingAccountList.to_json())

# convert the object into a dict
models_billing_account_list_dict = models_billing_account_list_instance.to_dict()
# create an instance of ModelsBillingAccountList from a dict
models_billing_account_list_from_dict = ModelsBillingAccountList.from_dict(models_billing_account_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


