# Auth0Auth0TokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** |  | [optional] 
**expires_in** | **int** |  | [optional] 
**token_type** | **str** |  | [optional] 

## Example

```python
from monad.models.auth0_auth0_token_response import Auth0Auth0TokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Auth0Auth0TokenResponse from a JSON string
auth0_auth0_token_response_instance = Auth0Auth0TokenResponse.from_json(json)
# print the JSON string representation of the object
print(Auth0Auth0TokenResponse.to_json())

# convert the object into a dict
auth0_auth0_token_response_dict = auth0_auth0_token_response_instance.to_dict()
# create an instance of Auth0Auth0TokenResponse from a dict
auth0_auth0_token_response_from_dict = Auth0Auth0TokenResponse.from_dict(auth0_auth0_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


