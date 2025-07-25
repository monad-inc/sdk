# SystemlogSecretsConfig

Okta system log secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.systemlog_secrets_config import SystemlogSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SystemlogSecretsConfig from a JSON string
systemlog_secrets_config_instance = SystemlogSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SystemlogSecretsConfig.to_json())

# convert the object into a dict
systemlog_secrets_config_dict = systemlog_secrets_config_instance.to_dict()
# create an instance of SystemlogSecretsConfig from a dict
systemlog_secrets_config_from_dict = SystemlogSecretsConfig.from_dict(systemlog_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


