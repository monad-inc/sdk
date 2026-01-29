# OwnbackupAccountEventsSecretsConfig

Ownbackup Audit Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**refresh_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.ownbackup_account_events_secrets_config import OwnbackupAccountEventsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OwnbackupAccountEventsSecretsConfig from a JSON string
ownbackup_account_events_secrets_config_instance = OwnbackupAccountEventsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(OwnbackupAccountEventsSecretsConfig.to_json())

# convert the object into a dict
ownbackup_account_events_secrets_config_dict = ownbackup_account_events_secrets_config_instance.to_dict()
# create an instance of OwnbackupAccountEventsSecretsConfig from a dict
ownbackup_account_events_secrets_config_from_dict = OwnbackupAccountEventsSecretsConfig.from_dict(ownbackup_account_events_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


