# SecretProcessesorInputConfigSecrets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**integration_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**oauth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**personal_access_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**tenant_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**application_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**application_key_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**enterprise_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**access_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**aws_access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**aws_secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**rsa_private_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**api_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**harvest_api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**github_app_private_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**user_oauth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**private_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**twilio_account_sid** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**twilio_auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**username** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**customer_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**domain** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

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


