# DuoSecurityActivityLogsSecretsConfig

Duo Security Activity Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.duo_security_activity_logs_secrets_config import DuoSecurityActivityLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DuoSecurityActivityLogsSecretsConfig from a JSON string
duo_security_activity_logs_secrets_config_instance = DuoSecurityActivityLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(DuoSecurityActivityLogsSecretsConfig.to_json())

# convert the object into a dict
duo_security_activity_logs_secrets_config_dict = duo_security_activity_logs_secrets_config_instance.to_dict()
# create an instance of DuoSecurityActivityLogsSecretsConfig from a dict
duo_security_activity_logs_secrets_config_from_dict = DuoSecurityActivityLogsSecretsConfig.from_dict(duo_security_activity_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


