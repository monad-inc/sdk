# AuthenticationtypesOkta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**client_secret** | **str** |  | [optional] 
**domain** | **str** |  | [optional] 

## Example

```python
from monad.models.authenticationtypes_okta import AuthenticationtypesOkta

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationtypesOkta from a JSON string
authenticationtypes_okta_instance = AuthenticationtypesOkta.from_json(json)
# print the JSON string representation of the object
print(AuthenticationtypesOkta.to_json())

# convert the object into a dict
authenticationtypes_okta_dict = authenticationtypes_okta_instance.to_dict()
# create an instance of AuthenticationtypesOkta from a dict
authenticationtypes_okta_from_dict = AuthenticationtypesOkta.from_dict(authenticationtypes_okta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


