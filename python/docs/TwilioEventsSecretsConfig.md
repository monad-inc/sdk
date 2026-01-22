# TwilioEventsSecretsConfig

Twilio Events secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**twilio_account_sid** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**twilio_auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.twilio_events_secrets_config import TwilioEventsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TwilioEventsSecretsConfig from a JSON string
twilio_events_secrets_config_instance = TwilioEventsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(TwilioEventsSecretsConfig.to_json())

# convert the object into a dict
twilio_events_secrets_config_dict = twilio_events_secrets_config_instance.to_dict()
# create an instance of TwilioEventsSecretsConfig from a dict
twilio_events_secrets_config_from_dict = TwilioEventsSecretsConfig.from_dict(twilio_events_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


