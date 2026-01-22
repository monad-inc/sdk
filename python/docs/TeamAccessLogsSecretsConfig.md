# TeamAccessLogsSecretsConfig

Slack Team Access Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.team_access_logs_secrets_config import TeamAccessLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TeamAccessLogsSecretsConfig from a JSON string
team_access_logs_secrets_config_instance = TeamAccessLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(TeamAccessLogsSecretsConfig.to_json())

# convert the object into a dict
team_access_logs_secrets_config_dict = team_access_logs_secrets_config_instance.to_dict()
# create an instance of TeamAccessLogsSecretsConfig from a dict
team_access_logs_secrets_config_from_dict = TeamAccessLogsSecretsConfig.from_dict(team_access_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


