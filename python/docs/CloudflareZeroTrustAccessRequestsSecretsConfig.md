# CloudflareZeroTrustAccessRequestsSecretsConfig

Cloudflare Zero Trust Access Requests secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloudflare_zero_trust_access_requests_secrets_config import CloudflareZeroTrustAccessRequestsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareZeroTrustAccessRequestsSecretsConfig from a JSON string
cloudflare_zero_trust_access_requests_secrets_config_instance = CloudflareZeroTrustAccessRequestsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareZeroTrustAccessRequestsSecretsConfig.to_json())

# convert the object into a dict
cloudflare_zero_trust_access_requests_secrets_config_dict = cloudflare_zero_trust_access_requests_secrets_config_instance.to_dict()
# create an instance of CloudflareZeroTrustAccessRequestsSecretsConfig from a dict
cloudflare_zero_trust_access_requests_secrets_config_from_dict = CloudflareZeroTrustAccessRequestsSecretsConfig.from_dict(cloudflare_zero_trust_access_requests_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


