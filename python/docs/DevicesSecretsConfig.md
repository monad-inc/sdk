# DevicesSecretsConfig

Tailscale Devices secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.devices_secrets_config import DevicesSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DevicesSecretsConfig from a JSON string
devices_secrets_config_instance = DevicesSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(DevicesSecretsConfig.to_json())

# convert the object into a dict
devices_secrets_config_dict = devices_secrets_config_instance.to_dict()
# create an instance of DevicesSecretsConfig from a dict
devices_secrets_config_from_dict = DevicesSecretsConfig.from_dict(devices_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


