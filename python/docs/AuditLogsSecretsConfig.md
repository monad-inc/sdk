# AuditLogsSecretsConfig

GitHub audit logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_access_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.audit_logs_secrets_config import AuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AuditLogsSecretsConfig from a JSON string
audit_logs_secrets_config_instance = AuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AuditLogsSecretsConfig.to_json())

# convert the object into a dict
audit_logs_secrets_config_dict = audit_logs_secrets_config_instance.to_dict()
# create an instance of AuditLogsSecretsConfig from a dict
audit_logs_secrets_config_from_dict = AuditLogsSecretsConfig.from_dict(audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


