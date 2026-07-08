# CloudflareUrlScannerSecretsConfig

Cloudflare URL Scanner secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloudflare_url_scanner_secrets_config import CloudflareUrlScannerSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareUrlScannerSecretsConfig from a JSON string
cloudflare_url_scanner_secrets_config_instance = CloudflareUrlScannerSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareUrlScannerSecretsConfig.to_json())

# convert the object into a dict
cloudflare_url_scanner_secrets_config_dict = cloudflare_url_scanner_secrets_config_instance.to_dict()
# create an instance of CloudflareUrlScannerSecretsConfig from a dict
cloudflare_url_scanner_secrets_config_from_dict = CloudflareUrlScannerSecretsConfig.from_dict(cloudflare_url_scanner_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


