# RoutesV2InputConfigSecrets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID for the Wiz API. This is required to authenticate requests. | [optional] 
**client_secret** | **str** | Client Secret for the Wiz API. This is required to authenticate requests. | [optional] 
**credentials_json** | **str** | JSON credentials to authenticate with Google Cloud. | [optional] 
**integration_key** | **str** |  | [optional] 
**secret_key** | **str** | Secret Key for the Tenable API. This is required to authenticate requests. | [optional] 
**personal_access_token** | **str** | Your personal access token that grants read:audit_log | [optional] 
**enterprise_id** | **str** | Client Secret for the Box API. This is required to authenticate requests. | [optional] 
**api_key** | **str** | API Key for the Snyk API. This is required to authenticate requests. | [optional] 
**token** | **str** | Token for the Wiz API. This is required to authenticate requests. | [optional] 
**access_key** | **str** | Access Key for the Tenable API. This is required to authenticate requests. | [optional] 
**customer_id** | **str** | Google Workspace Customer ID. If you use your google workspace customer ID you will pull data on all users in all domains of your Google Workspace account. This should be set if Domain is not set. | [optional] 
**domain** | **str** | Domain name your users belong to. If you use a google workspace domain you will only pull user data for users that belong to that domain. This should be set if CustomerID is not set | [optional] 

## Example

```python
from monad.models.routes_v2_input_config_secrets import RoutesV2InputConfigSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2InputConfigSecrets from a JSON string
routes_v2_input_config_secrets_instance = RoutesV2InputConfigSecrets.from_json(json)
# print the JSON string representation of the object
print(RoutesV2InputConfigSecrets.to_json())

# convert the object into a dict
routes_v2_input_config_secrets_dict = routes_v2_input_config_secrets_instance.to_dict()
# create an instance of RoutesV2InputConfigSecrets from a dict
routes_v2_input_config_secrets_from_dict = RoutesV2InputConfigSecrets.from_dict(routes_v2_input_config_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


