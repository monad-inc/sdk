# RoutesV2OutputConfigSecrets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | **str** | The authentication token value you&#39;ve set for your HTTP Source. This token is used to authenticate requests to your Cribl endpoint. | [optional] 
**api_key** | **str** | API key for authenticating with the Elasticsearch cluster. Required when auth type is set to &#39;api_key&#39;. | [optional] 
**password** | **str** | The Users password | [optional] 
**auth_headers** | **Dict[str, str]** | Authentication headers | [optional] 
**client_id** | **str** | The application (client) ID registered in Azure Active Directory. | [optional] 
**client_secret** | **str** | The client secret associated with the registered application in Azure AD. | [optional] 
**tenant_id** | **str** | The Azure Active Directory tenant (directory) ID. | [optional] 
**token** | **str** | The token for authenticating with Splunk. | [optional] 
**access_id** | **str** | The Access ID for authenticating with Sumo Logic. | [optional] 
**access_key** | **str** | The Access Key for authenticating with Sumo Logic. | [optional] 

## Example

```python
from monad.models.routes_v2_output_config_secrets import RoutesV2OutputConfigSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2OutputConfigSecrets from a JSON string
routes_v2_output_config_secrets_instance = RoutesV2OutputConfigSecrets.from_json(json)
# print the JSON string representation of the object
print(RoutesV2OutputConfigSecrets.to_json())

# convert the object into a dict
routes_v2_output_config_secrets_dict = routes_v2_output_config_secrets_instance.to_dict()
# create an instance of RoutesV2OutputConfigSecrets from a dict
routes_v2_output_config_secrets_from_dict = RoutesV2OutputConfigSecrets.from_dict(routes_v2_output_config_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


