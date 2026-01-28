# CloudflareDdosAttackAnalyticsSecretsConfig

Cloudflare DDoS Attack Analytics secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloudflare_ddos_attack_analytics_secrets_config import CloudflareDdosAttackAnalyticsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareDdosAttackAnalyticsSecretsConfig from a JSON string
cloudflare_ddos_attack_analytics_secrets_config_instance = CloudflareDdosAttackAnalyticsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareDdosAttackAnalyticsSecretsConfig.to_json())

# convert the object into a dict
cloudflare_ddos_attack_analytics_secrets_config_dict = cloudflare_ddos_attack_analytics_secrets_config_instance.to_dict()
# create an instance of CloudflareDdosAttackAnalyticsSecretsConfig from a dict
cloudflare_ddos_attack_analytics_secrets_config_from_dict = CloudflareDdosAttackAnalyticsSecretsConfig.from_dict(cloudflare_ddos_attack_analytics_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


