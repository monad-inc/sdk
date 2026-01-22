# ZendeskAuditLogsSecretsConfig

Zendesk Audit Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.zendesk_audit_logs_secrets_config import ZendeskAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ZendeskAuditLogsSecretsConfig from a JSON string
zendesk_audit_logs_secrets_config_instance = ZendeskAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(ZendeskAuditLogsSecretsConfig.to_json())

# convert the object into a dict
zendesk_audit_logs_secrets_config_dict = zendesk_audit_logs_secrets_config_instance.to_dict()
# create an instance of ZendeskAuditLogsSecretsConfig from a dict
zendesk_audit_logs_secrets_config_from_dict = ZendeskAuditLogsSecretsConfig.from_dict(zendesk_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


