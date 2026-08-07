# HydrolixPasswordAuth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | [**ModelsSecret**](ModelsSecret.md) |  | 
**username** | **str** | Hydrolix user account username. | 

## Example

```python
from monad.models.hydrolix_password_auth import HydrolixPasswordAuth

# TODO update the JSON string below
json = "{}"
# create an instance of HydrolixPasswordAuth from a JSON string
hydrolix_password_auth_instance = HydrolixPasswordAuth.from_json(json)
# print the JSON string representation of the object
print(HydrolixPasswordAuth.to_json())

# convert the object into a dict
hydrolix_password_auth_dict = hydrolix_password_auth_instance.to_dict()
# create an instance of HydrolixPasswordAuth from a dict
hydrolix_password_auth_from_dict = HydrolixPasswordAuth.from_dict(hydrolix_password_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


