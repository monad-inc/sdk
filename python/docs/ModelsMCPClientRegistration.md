# ModelsMCPClientRegistration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**client_name** | **str** |  | [optional] 
**created_by_user_id** | **str** |  | [optional] 
**grant_types** | **List[str]** |  | [optional] 
**last_used_at** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**redirect_uris** | **List[str]** |  | [optional] 
**revoked_at** | **str** |  | [optional] 
**software_id** | **str** |  | [optional] 
**software_version** | **str** |  | [optional] 
**token_endpoint_auth_method** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_mcp_client_registration import ModelsMCPClientRegistration

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsMCPClientRegistration from a JSON string
models_mcp_client_registration_instance = ModelsMCPClientRegistration.from_json(json)
# print the JSON string representation of the object
print(ModelsMCPClientRegistration.to_json())

# convert the object into a dict
models_mcp_client_registration_dict = models_mcp_client_registration_instance.to_dict()
# create an instance of ModelsMCPClientRegistration from a dict
models_mcp_client_registration_from_dict = ModelsMCPClientRegistration.from_dict(models_mcp_client_registration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


