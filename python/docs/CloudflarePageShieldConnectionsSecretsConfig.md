# CloudflarePageShieldConnectionsSecretsConfig

Cloudflare Page Shield Connections secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloudflare_page_shield_connections_secrets_config import CloudflarePageShieldConnectionsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflarePageShieldConnectionsSecretsConfig from a JSON string
cloudflare_page_shield_connections_secrets_config_instance = CloudflarePageShieldConnectionsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflarePageShieldConnectionsSecretsConfig.to_json())

# convert the object into a dict
cloudflare_page_shield_connections_secrets_config_dict = cloudflare_page_shield_connections_secrets_config_instance.to_dict()
# create an instance of CloudflarePageShieldConnectionsSecretsConfig from a dict
cloudflare_page_shield_connections_secrets_config_from_dict = CloudflarePageShieldConnectionsSecretsConfig.from_dict(cloudflare_page_shield_connections_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


