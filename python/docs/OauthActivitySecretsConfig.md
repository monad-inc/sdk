# OauthActivitySecretsConfig

Google Workspace OAuth Activity secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.oauth_activity_secrets_config import OauthActivitySecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OauthActivitySecretsConfig from a JSON string
oauth_activity_secrets_config_instance = OauthActivitySecretsConfig.from_json(json)
# print the JSON string representation of the object
print(OauthActivitySecretsConfig.to_json())

# convert the object into a dict
oauth_activity_secrets_config_dict = oauth_activity_secrets_config_instance.to_dict()
# create an instance of OauthActivitySecretsConfig from a dict
oauth_activity_secrets_config_from_dict = OauthActivitySecretsConfig.from_dict(oauth_activity_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


