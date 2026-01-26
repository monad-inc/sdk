# AivenServiceLogsSecretsConfig

Aiven Service Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.aiven_service_logs_secrets_config import AivenServiceLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AivenServiceLogsSecretsConfig from a JSON string
aiven_service_logs_secrets_config_instance = AivenServiceLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AivenServiceLogsSecretsConfig.to_json())

# convert the object into a dict
aiven_service_logs_secrets_config_dict = aiven_service_logs_secrets_config_instance.to_dict()
# create an instance of AivenServiceLogsSecretsConfig from a dict
aiven_service_logs_secrets_config_from_dict = AivenServiceLogsSecretsConfig.from_dict(aiven_service_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


