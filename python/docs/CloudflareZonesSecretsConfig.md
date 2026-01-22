# CloudflareZonesSecretsConfig

Cloudflare Zones secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloudflare_zones_secrets_config import CloudflareZonesSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareZonesSecretsConfig from a JSON string
cloudflare_zones_secrets_config_instance = CloudflareZonesSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareZonesSecretsConfig.to_json())

# convert the object into a dict
cloudflare_zones_secrets_config_dict = cloudflare_zones_secrets_config_instance.to_dict()
# create an instance of CloudflareZonesSecretsConfig from a dict
cloudflare_zones_secrets_config_from_dict = CloudflareZonesSecretsConfig.from_dict(cloudflare_zones_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


