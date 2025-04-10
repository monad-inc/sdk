# RoutesV2InputConfigSecrets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**oauth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**integration_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**personal_access_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**enterprise_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**aws_access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**aws_secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**private_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**customer_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**domain** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

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


