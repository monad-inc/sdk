# SlackEnterpriseAuditLogsSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_oauth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.slack_enterprise_audit_logs_secrets_config import SlackEnterpriseAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SlackEnterpriseAuditLogsSecretsConfig from a JSON string
slack_enterprise_audit_logs_secrets_config_instance = SlackEnterpriseAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SlackEnterpriseAuditLogsSecretsConfig.to_json())

# convert the object into a dict
slack_enterprise_audit_logs_secrets_config_dict = slack_enterprise_audit_logs_secrets_config_instance.to_dict()
# create an instance of SlackEnterpriseAuditLogsSecretsConfig from a dict
slack_enterprise_audit_logs_secrets_config_from_dict = SlackEnterpriseAuditLogsSecretsConfig.from_dict(slack_enterprise_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


