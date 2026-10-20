# ModelsMCPClientRegistrationList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**registrations** | [**List[ModelsMCPClientRegistration]**](ModelsMCPClientRegistration.md) |  | [optional] 

## Example

```python
from monad.models.models_mcp_client_registration_list import ModelsMCPClientRegistrationList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsMCPClientRegistrationList from a JSON string
models_mcp_client_registration_list_instance = ModelsMCPClientRegistrationList.from_json(json)
# print the JSON string representation of the object
print(ModelsMCPClientRegistrationList.to_json())

# convert the object into a dict
models_mcp_client_registration_list_dict = models_mcp_client_registration_list_instance.to_dict()
# create an instance of ModelsMCPClientRegistrationList from a dict
models_mcp_client_registration_list_from_dict = ModelsMCPClientRegistrationList.from_dict(models_mcp_client_registration_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


