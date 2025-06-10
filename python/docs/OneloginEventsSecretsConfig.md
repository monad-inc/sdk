# OneloginEventsSecretsConfig

Onelogin Events secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.onelogin_events_secrets_config import OneloginEventsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OneloginEventsSecretsConfig from a JSON string
onelogin_events_secrets_config_instance = OneloginEventsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(OneloginEventsSecretsConfig.to_json())

# convert the object into a dict
onelogin_events_secrets_config_dict = onelogin_events_secrets_config_instance.to_dict()
# create an instance of OneloginEventsSecretsConfig from a dict
onelogin_events_secrets_config_from_dict = OneloginEventsSecretsConfig.from_dict(onelogin_events_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


