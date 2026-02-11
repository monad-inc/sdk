# BitwardenEventsSecretsConfig

Bitwarden Events secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.bitwarden_events_secrets_config import BitwardenEventsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BitwardenEventsSecretsConfig from a JSON string
bitwarden_events_secrets_config_instance = BitwardenEventsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(BitwardenEventsSecretsConfig.to_json())

# convert the object into a dict
bitwarden_events_secrets_config_dict = bitwarden_events_secrets_config_instance.to_dict()
# create an instance of BitwardenEventsSecretsConfig from a dict
bitwarden_events_secrets_config_from_dict = BitwardenEventsSecretsConfig.from_dict(bitwarden_events_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


