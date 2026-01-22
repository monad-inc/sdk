# CloudflareDnsRecordsSecretsConfig

Cloudflare DNS Records secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloudflare_dns_records_secrets_config import CloudflareDnsRecordsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareDnsRecordsSecretsConfig from a JSON string
cloudflare_dns_records_secrets_config_instance = CloudflareDnsRecordsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareDnsRecordsSecretsConfig.to_json())

# convert the object into a dict
cloudflare_dns_records_secrets_config_dict = cloudflare_dns_records_secrets_config_instance.to_dict()
# create an instance of CloudflareDnsRecordsSecretsConfig from a dict
cloudflare_dns_records_secrets_config_from_dict = CloudflareDnsRecordsSecretsConfig.from_dict(cloudflare_dns_records_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


