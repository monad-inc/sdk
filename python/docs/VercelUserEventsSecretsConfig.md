# VercelUserEventsSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.vercel_user_events_secrets_config import VercelUserEventsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VercelUserEventsSecretsConfig from a JSON string
vercel_user_events_secrets_config_instance = VercelUserEventsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(VercelUserEventsSecretsConfig.to_json())

# convert the object into a dict
vercel_user_events_secrets_config_dict = vercel_user_events_secrets_config_instance.to_dict()
# create an instance of VercelUserEventsSecretsConfig from a dict
vercel_user_events_secrets_config_from_dict = VercelUserEventsSecretsConfig.from_dict(vercel_user_events_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


