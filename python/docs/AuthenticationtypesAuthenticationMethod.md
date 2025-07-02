# AuthenticationtypesAuthenticationMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmed** | **bool** |  | [optional] 
**created_at** | **str** |  | [optional] 
**credential_backed_up** | **bool** |  | [optional] 
**credential_device_type** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**key_id** | **str** |  | [optional] 
**link_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**phone_number** | **str** |  | [optional] 
**public_key** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**user_agent** | **str** |  | [optional] 

## Example

```python
from monad.models.authenticationtypes_authentication_method import AuthenticationtypesAuthenticationMethod

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationtypesAuthenticationMethod from a JSON string
authenticationtypes_authentication_method_instance = AuthenticationtypesAuthenticationMethod.from_json(json)
# print the JSON string representation of the object
print(AuthenticationtypesAuthenticationMethod.to_json())

# convert the object into a dict
authenticationtypes_authentication_method_dict = authenticationtypes_authentication_method_instance.to_dict()
# create an instance of AuthenticationtypesAuthenticationMethod from a dict
authenticationtypes_authentication_method_from_dict = AuthenticationtypesAuthenticationMethod.from_dict(authenticationtypes_authentication_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


