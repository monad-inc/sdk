# GithubActionsWorkflowLogsWebhookScopeConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization** | [**GithubActionsWorkflowLogsWebhookOrganizationScope**](GithubActionsWorkflowLogsWebhookOrganizationScope.md) |  | [optional] 
**repository** | [**GithubActionsWorkflowLogsWebhookRepositoryScope**](GithubActionsWorkflowLogsWebhookRepositoryScope.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from monad.models.github_actions_workflow_logs_webhook_scope_config import GithubActionsWorkflowLogsWebhookScopeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GithubActionsWorkflowLogsWebhookScopeConfig from a JSON string
github_actions_workflow_logs_webhook_scope_config_instance = GithubActionsWorkflowLogsWebhookScopeConfig.from_json(json)
# print the JSON string representation of the object
print(GithubActionsWorkflowLogsWebhookScopeConfig.to_json())

# convert the object into a dict
github_actions_workflow_logs_webhook_scope_config_dict = github_actions_workflow_logs_webhook_scope_config_instance.to_dict()
# create an instance of GithubActionsWorkflowLogsWebhookScopeConfig from a dict
github_actions_workflow_logs_webhook_scope_config_from_dict = GithubActionsWorkflowLogsWebhookScopeConfig.from_dict(github_actions_workflow_logs_webhook_scope_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


