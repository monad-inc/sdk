# AuthenticationtypesAuth0


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**okta** | [**AuthenticationtypesOkta**](AuthenticationtypesOkta.md) |  | [optional] 

## Example

```python
from monad.models.authenticationtypes_auth0 import AuthenticationtypesAuth0

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationtypesAuth0 from a JSON string
authenticationtypes_auth0_instance = AuthenticationtypesAuth0.from_json(json)
# print the JSON string representation of the object
print(AuthenticationtypesAuth0.to_json())

# convert the object into a dict
authenticationtypes_auth0_dict = authenticationtypes_auth0_instance.to_dict()
# create an instance of AuthenticationtypesAuth0 from a dict
authenticationtypes_auth0_from_dict = AuthenticationtypesAuth0.from_dict(authenticationtypes_auth0_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


