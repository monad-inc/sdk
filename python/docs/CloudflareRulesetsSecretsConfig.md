# CloudflareRulesetsSecretsConfig

Cloudflare Rulesets secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloudflare_rulesets_secrets_config import CloudflareRulesetsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareRulesetsSecretsConfig from a JSON string
cloudflare_rulesets_secrets_config_instance = CloudflareRulesetsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareRulesetsSecretsConfig.to_json())

# convert the object into a dict
cloudflare_rulesets_secrets_config_dict = cloudflare_rulesets_secrets_config_instance.to_dict()
# create an instance of CloudflareRulesetsSecretsConfig from a dict
cloudflare_rulesets_secrets_config_from_dict = CloudflareRulesetsSecretsConfig.from_dict(cloudflare_rulesets_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


