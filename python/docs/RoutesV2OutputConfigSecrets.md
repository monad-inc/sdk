# RoutesV2OutputConfigSecrets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**auth_headers** | [**Dict[str, ModelsSecret]**](ModelsSecret.md) | Authentication headers | [optional] 
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**tenant_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**private_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**access_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

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


