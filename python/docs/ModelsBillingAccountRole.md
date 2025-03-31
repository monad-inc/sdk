# ModelsBillingAccountRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**permissions** | **List[str]** |  | [optional] 
**updated_at** | **str** |  | [optional] 
**users** | [**List[ModelsBillingAccountRoleUser]**](ModelsBillingAccountRoleUser.md) |  | [optional] 

## Example

```python
from monad.models.models_billing_account_role import ModelsBillingAccountRole

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsBillingAccountRole from a JSON string
models_billing_account_role_instance = ModelsBillingAccountRole.from_json(json)
# print the JSON string representation of the object
print(ModelsBillingAccountRole.to_json())

# convert the object into a dict
models_billing_account_role_dict = models_billing_account_role_instance.to_dict()
# create an instance of ModelsBillingAccountRole from a dict
models_billing_account_role_from_dict = ModelsBillingAccountRole.from_dict(models_billing_account_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


