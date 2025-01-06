# Auth0LoginRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from monad.models.auth0_login_request import Auth0LoginRequest

# TODO update the JSON string below
json = "{}"
# create an instance of Auth0LoginRequest from a JSON string
auth0_login_request_instance = Auth0LoginRequest.from_json(json)
# print the JSON string representation of the object
print(Auth0LoginRequest.to_json())

# convert the object into a dict
auth0_login_request_dict = auth0_login_request_instance.to_dict()
# create an instance of Auth0LoginRequest from a dict
auth0_login_request_from_dict = Auth0LoginRequest.from_dict(auth0_login_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


