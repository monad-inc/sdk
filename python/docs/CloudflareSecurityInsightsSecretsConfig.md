# CloudflareSecurityInsightsSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloudflare_security_insights_secrets_config import CloudflareSecurityInsightsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareSecurityInsightsSecretsConfig from a JSON string
cloudflare_security_insights_secrets_config_instance = CloudflareSecurityInsightsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareSecurityInsightsSecretsConfig.to_json())

# convert the object into a dict
cloudflare_security_insights_secrets_config_dict = cloudflare_security_insights_secrets_config_instance.to_dict()
# create an instance of CloudflareSecurityInsightsSecretsConfig from a dict
cloudflare_security_insights_secrets_config_from_dict = CloudflareSecurityInsightsSecretsConfig.from_dict(cloudflare_security_insights_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


