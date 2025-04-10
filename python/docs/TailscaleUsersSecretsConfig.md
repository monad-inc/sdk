# TailscaleUsersSecretsConfig

Tailscale Users secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.tailscale_users_secrets_config import TailscaleUsersSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TailscaleUsersSecretsConfig from a JSON string
tailscale_users_secrets_config_instance = TailscaleUsersSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(TailscaleUsersSecretsConfig.to_json())

# convert the object into a dict
tailscale_users_secrets_config_dict = tailscale_users_secrets_config_instance.to_dict()
# create an instance of TailscaleUsersSecretsConfig from a dict
tailscale_users_secrets_config_from_dict = TailscaleUsersSecretsConfig.from_dict(tailscale_users_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


