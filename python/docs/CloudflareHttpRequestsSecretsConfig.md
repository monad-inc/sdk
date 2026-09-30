# CloudflareHttpRequestsSecretsConfig

Cloudflare HTTP Requests secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloudflare_http_requests_secrets_config import CloudflareHttpRequestsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareHttpRequestsSecretsConfig from a JSON string
cloudflare_http_requests_secrets_config_instance = CloudflareHttpRequestsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareHttpRequestsSecretsConfig.to_json())

# convert the object into a dict
cloudflare_http_requests_secrets_config_dict = cloudflare_http_requests_secrets_config_instance.to_dict()
# create an instance of CloudflareHttpRequestsSecretsConfig from a dict
cloudflare_http_requests_secrets_config_from_dict = CloudflareHttpRequestsSecretsConfig.from_dict(cloudflare_http_requests_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


