# TelephonyLogsSecretsConfig

Duo Security Telephony Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.telephony_logs_secrets_config import TelephonyLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TelephonyLogsSecretsConfig from a JSON string
telephony_logs_secrets_config_instance = TelephonyLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(TelephonyLogsSecretsConfig.to_json())

# convert the object into a dict
telephony_logs_secrets_config_dict = telephony_logs_secrets_config_instance.to_dict()
# create an instance of TelephonyLogsSecretsConfig from a dict
telephony_logs_secrets_config_from_dict = TelephonyLogsSecretsConfig.from_dict(telephony_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


