# TeamIntegrationLogsSecretsConfig

Slack Team Integration Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.team_integration_logs_secrets_config import TeamIntegrationLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TeamIntegrationLogsSecretsConfig from a JSON string
team_integration_logs_secrets_config_instance = TeamIntegrationLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(TeamIntegrationLogsSecretsConfig.to_json())

# convert the object into a dict
team_integration_logs_secrets_config_dict = team_integration_logs_secrets_config_instance.to_dict()
# create an instance of TeamIntegrationLogsSecretsConfig from a dict
team_integration_logs_secrets_config_from_dict = TeamIntegrationLogsSecretsConfig.from_dict(team_integration_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


