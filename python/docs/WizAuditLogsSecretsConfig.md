# WizAuditLogsSecretsConfig

Wiz Audit Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.wiz_audit_logs_secrets_config import WizAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WizAuditLogsSecretsConfig from a JSON string
wiz_audit_logs_secrets_config_instance = WizAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(WizAuditLogsSecretsConfig.to_json())

# convert the object into a dict
wiz_audit_logs_secrets_config_dict = wiz_audit_logs_secrets_config_instance.to_dict()
# create an instance of WizAuditLogsSecretsConfig from a dict
wiz_audit_logs_secrets_config_from_dict = WizAuditLogsSecretsConfig.from_dict(wiz_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


