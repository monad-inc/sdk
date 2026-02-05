# OpalEventsSecretsConfig

Opal Events secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.opal_events_secrets_config import OpalEventsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OpalEventsSecretsConfig from a JSON string
opal_events_secrets_config_instance = OpalEventsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(OpalEventsSecretsConfig.to_json())

# convert the object into a dict
opal_events_secrets_config_dict = opal_events_secrets_config_instance.to_dict()
# create an instance of OpalEventsSecretsConfig from a dict
opal_events_secrets_config_from_dict = OpalEventsSecretsConfig.from_dict(opal_events_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


