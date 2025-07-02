# AuthenticationtypesMFAEnrollmentTicket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ticket_id** | **str** |  | [optional] 
**ticket_url** | **str** |  | [optional] 

## Example

```python
from monad.models.authenticationtypes_mfa_enrollment_ticket import AuthenticationtypesMFAEnrollmentTicket

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationtypesMFAEnrollmentTicket from a JSON string
authenticationtypes_mfa_enrollment_ticket_instance = AuthenticationtypesMFAEnrollmentTicket.from_json(json)
# print the JSON string representation of the object
print(AuthenticationtypesMFAEnrollmentTicket.to_json())

# convert the object into a dict
authenticationtypes_mfa_enrollment_ticket_dict = authenticationtypes_mfa_enrollment_ticket_instance.to_dict()
# create an instance of AuthenticationtypesMFAEnrollmentTicket from a dict
authenticationtypes_mfa_enrollment_ticket_from_dict = AuthenticationtypesMFAEnrollmentTicket.from_dict(authenticationtypes_mfa_enrollment_ticket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


