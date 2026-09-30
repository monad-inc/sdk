# GithubActionsWorkflowLogsWebhookSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_config** | [**CommonAuthConfig**](CommonAuthConfig.md) |  | [optional] 
**scope** | [**GithubActionsWorkflowLogsWebhookScopeConfig**](GithubActionsWorkflowLogsWebhookScopeConfig.md) |  | [optional] 
**webhook_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.github_actions_workflow_logs_webhook_settings_config import GithubActionsWorkflowLogsWebhookSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GithubActionsWorkflowLogsWebhookSettingsConfig from a JSON string
github_actions_workflow_logs_webhook_settings_config_instance = GithubActionsWorkflowLogsWebhookSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(GithubActionsWorkflowLogsWebhookSettingsConfig.to_json())

# convert the object into a dict
github_actions_workflow_logs_webhook_settings_config_dict = github_actions_workflow_logs_webhook_settings_config_instance.to_dict()
# create an instance of GithubActionsWorkflowLogsWebhookSettingsConfig from a dict
github_actions_workflow_logs_webhook_settings_config_from_dict = GithubActionsWorkflowLogsWebhookSettingsConfig.from_dict(github_actions_workflow_logs_webhook_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


