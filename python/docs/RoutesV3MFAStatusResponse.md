# RoutesV3MFAStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | [optional] 
**methods** | [**List[AuthenticationtypesAuthenticationMethod]**](AuthenticationtypesAuthenticationMethod.md) |  | [optional] 

## Example

```python
from monad.models.routes_v3_mfa_status_response import RoutesV3MFAStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3MFAStatusResponse from a JSON string
routes_v3_mfa_status_response_instance = RoutesV3MFAStatusResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3MFAStatusResponse.to_json())

# convert the object into a dict
routes_v3_mfa_status_response_dict = routes_v3_mfa_status_response_instance.to_dict()
# create an instance of RoutesV3MFAStatusResponse from a dict
routes_v3_mfa_status_response_from_dict = RoutesV3MFAStatusResponse.from_dict(routes_v3_mfa_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


