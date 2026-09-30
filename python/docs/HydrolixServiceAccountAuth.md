# HydrolixServiceAccountAuth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.hydrolix_service_account_auth import HydrolixServiceAccountAuth

# TODO update the JSON string below
json = "{}"
# create an instance of HydrolixServiceAccountAuth from a JSON string
hydrolix_service_account_auth_instance = HydrolixServiceAccountAuth.from_json(json)
# print the JSON string representation of the object
print(HydrolixServiceAccountAuth.to_json())

# convert the object into a dict
hydrolix_service_account_auth_dict = hydrolix_service_account_auth_instance.to_dict()
# create an instance of HydrolixServiceAccountAuth from a dict
hydrolix_service_account_auth_from_dict = HydrolixServiceAccountAuth.from_dict(hydrolix_service_account_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


