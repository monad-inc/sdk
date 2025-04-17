# RoutesResendVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_resend_verification_request import RoutesResendVerificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesResendVerificationRequest from a JSON string
routes_resend_verification_request_instance = RoutesResendVerificationRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesResendVerificationRequest.to_json())

# convert the object into a dict
routes_resend_verification_request_dict = routes_resend_verification_request_instance.to_dict()
# create an instance of RoutesResendVerificationRequest from a dict
routes_resend_verification_request_from_dict = RoutesResendVerificationRequest.from_dict(routes_resend_verification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


