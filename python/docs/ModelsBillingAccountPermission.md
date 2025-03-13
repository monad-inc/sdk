# ModelsBillingAccountPermission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 

## Example

```python
from monad.models.models_billing_account_permission import ModelsBillingAccountPermission

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsBillingAccountPermission from a JSON string
models_billing_account_permission_instance = ModelsBillingAccountPermission.from_json(json)
# print the JSON string representation of the object
print(ModelsBillingAccountPermission.to_json())

# convert the object into a dict
models_billing_account_permission_dict = models_billing_account_permission_instance.to_dict()
# create an instance of ModelsBillingAccountPermission from a dict
models_billing_account_permission_from_dict = ModelsBillingAccountPermission.from_dict(models_billing_account_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


