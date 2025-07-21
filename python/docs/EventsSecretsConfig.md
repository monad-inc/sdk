# EventsSecretsConfig

Twilio Events secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**twilio_account_sid** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**twilio_auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.events_secrets_config import EventsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EventsSecretsConfig from a JSON string
events_secrets_config_instance = EventsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(EventsSecretsConfig.to_json())

# convert the object into a dict
events_secrets_config_dict = events_secrets_config_instance.to_dict()
# create an instance of EventsSecretsConfig from a dict
events_secrets_config_from_dict = EventsSecretsConfig.from_dict(events_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


