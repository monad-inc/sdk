# SecretProcessesorOutputConfigSecrets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**tenant_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**credentials** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**auth_headers** | [**Dict[str, ModelsSecret]**](ModelsSecret.md) | Authentication headers | [optional] 
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**routing_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**connection_string** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**private_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**access_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.secret_processesor_output_config_secrets import SecretProcessesorOutputConfigSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of SecretProcessesorOutputConfigSecrets from a JSON string
secret_processesor_output_config_secrets_instance = SecretProcessesorOutputConfigSecrets.from_json(json)
# print the JSON string representation of the object
print(SecretProcessesorOutputConfigSecrets.to_json())

# convert the object into a dict
secret_processesor_output_config_secrets_dict = secret_processesor_output_config_secrets_instance.to_dict()
# create an instance of SecretProcessesorOutputConfigSecrets from a dict
secret_processesor_output_config_secrets_from_dict = SecretProcessesorOutputConfigSecrets.from_dict(secret_processesor_output_config_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


