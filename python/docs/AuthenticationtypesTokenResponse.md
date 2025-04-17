# AuthenticationtypesTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** |  | [optional] 
**expires_in** | **int** |  | [optional] 
**id_token** | **str** |  | [optional] 
**refresh_token** | **str** |  | [optional] 
**token_type** | **str** |  | [optional] 

## Example

```python
from monad.models.authenticationtypes_token_response import AuthenticationtypesTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationtypesTokenResponse from a JSON string
authenticationtypes_token_response_instance = AuthenticationtypesTokenResponse.from_json(json)
# print the JSON string representation of the object
print(AuthenticationtypesTokenResponse.to_json())

# convert the object into a dict
authenticationtypes_token_response_dict = authenticationtypes_token_response_instance.to_dict()
# create an instance of AuthenticationtypesTokenResponse from a dict
authenticationtypes_token_response_from_dict = AuthenticationtypesTokenResponse.from_dict(authenticationtypes_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


