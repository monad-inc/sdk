# EventsLogsSecretsConfig

Tines Events Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.events_logs_secrets_config import EventsLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EventsLogsSecretsConfig from a JSON string
events_logs_secrets_config_instance = EventsLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(EventsLogsSecretsConfig.to_json())

# convert the object into a dict
events_logs_secrets_config_dict = events_logs_secrets_config_instance.to_dict()
# create an instance of EventsLogsSecretsConfig from a dict
events_logs_secrets_config_from_dict = EventsLogsSecretsConfig.from_dict(events_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


