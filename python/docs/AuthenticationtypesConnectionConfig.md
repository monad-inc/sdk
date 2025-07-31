# AuthenticationtypesConnectionConfig

Connection Config to be updated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth0** | [**AuthenticationtypesAuth0**](AuthenticationtypesAuth0.md) |  | [optional] 

## Example

```python
from monad.models.authenticationtypes_connection_config import AuthenticationtypesConnectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationtypesConnectionConfig from a JSON string
authenticationtypes_connection_config_instance = AuthenticationtypesConnectionConfig.from_json(json)
# print the JSON string representation of the object
print(AuthenticationtypesConnectionConfig.to_json())

# convert the object into a dict
authenticationtypes_connection_config_dict = authenticationtypes_connection_config_instance.to_dict()
# create an instance of AuthenticationtypesConnectionConfig from a dict
authenticationtypes_connection_config_from_dict = AuthenticationtypesConnectionConfig.from_dict(authenticationtypes_connection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


