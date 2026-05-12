# SecretProcessesorInputConfigSecrets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_key** | [**ModelsSecret**](ModelsSecret.md) |  | 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | 
**auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | 
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | 
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | 
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**tenant_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**application_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**application_key_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**enterprise_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**password** | [**ModelsSecret**](ModelsSecret.md) |  | 
**username** | [**ModelsSecret**](ModelsSecret.md) |  | 
**personal_auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | 
**access_token** | [**ModelsSecret**](ModelsSecret.md) |  | 
**rsa_private_key** | [**ModelsSecret**](ModelsSecret.md) |  | 
**api_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**personal_access_token** | [**ModelsSecret**](ModelsSecret.md) |  | 
**oauth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**harvest_api_key** | [**ModelsSecret**](ModelsSecret.md) |  | 
**github_app_private_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**refresh_token** | [**ModelsSecret**](ModelsSecret.md) |  | 
**user_oauth_token** | [**ModelsSecret**](ModelsSecret.md) |  | 
**private_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**token** | [**ModelsSecret**](ModelsSecret.md) |  | 
**twilio_account_sid** | [**ModelsSecret**](ModelsSecret.md) |  | 
**twilio_auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.secret_processesor_input_config_secrets import SecretProcessesorInputConfigSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of SecretProcessesorInputConfigSecrets from a JSON string
secret_processesor_input_config_secrets_instance = SecretProcessesorInputConfigSecrets.from_json(json)
# print the JSON string representation of the object
print(SecretProcessesorInputConfigSecrets.to_json())

# convert the object into a dict
secret_processesor_input_config_secrets_dict = secret_processesor_input_config_secrets_instance.to_dict()
# create an instance of SecretProcessesorInputConfigSecrets from a dict
secret_processesor_input_config_secrets_from_dict = SecretProcessesorInputConfigSecrets.from_dict(secret_processesor_input_config_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


