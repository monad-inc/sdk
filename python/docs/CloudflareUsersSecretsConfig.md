# CloudflareUsersSecretsConfig

Cloudflare Users secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloudflare_users_secrets_config import CloudflareUsersSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareUsersSecretsConfig from a JSON string
cloudflare_users_secrets_config_instance = CloudflareUsersSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareUsersSecretsConfig.to_json())

# convert the object into a dict
cloudflare_users_secrets_config_dict = cloudflare_users_secrets_config_instance.to_dict()
# create an instance of CloudflareUsersSecretsConfig from a dict
cloudflare_users_secrets_config_from_dict = CloudflareUsersSecretsConfig.from_dict(cloudflare_users_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


