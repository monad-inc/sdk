# TinesEventsLogsSecretsConfig

Tines Events Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.tines_events_logs_secrets_config import TinesEventsLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TinesEventsLogsSecretsConfig from a JSON string
tines_events_logs_secrets_config_instance = TinesEventsLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(TinesEventsLogsSecretsConfig.to_json())

# convert the object into a dict
tines_events_logs_secrets_config_dict = tines_events_logs_secrets_config_instance.to_dict()
# create an instance of TinesEventsLogsSecretsConfig from a dict
tines_events_logs_secrets_config_from_dict = TinesEventsLogsSecretsConfig.from_dict(tines_events_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


