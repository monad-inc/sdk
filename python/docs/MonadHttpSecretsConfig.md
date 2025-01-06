# MonadHttpSecretsConfig

Monad HTTP secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | **str** | Auth token to authenticate with Monad | [optional] 

## Example

```python
from monad.models.monad_http_secrets_config import MonadHttpSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MonadHttpSecretsConfig from a JSON string
monad_http_secrets_config_instance = MonadHttpSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(MonadHttpSecretsConfig.to_json())

# convert the object into a dict
monad_http_secrets_config_dict = monad_http_secrets_config_instance.to_dict()
# create an instance of MonadHttpSecretsConfig from a dict
monad_http_secrets_config_from_dict = MonadHttpSecretsConfig.from_dict(monad_http_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


