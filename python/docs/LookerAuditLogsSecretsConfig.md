# LookerAuditLogsSecretsConfig

Looker Core Audit Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.looker_audit_logs_secrets_config import LookerAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LookerAuditLogsSecretsConfig from a JSON string
looker_audit_logs_secrets_config_instance = LookerAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(LookerAuditLogsSecretsConfig.to_json())

# convert the object into a dict
looker_audit_logs_secrets_config_dict = looker_audit_logs_secrets_config_instance.to_dict()
# create an instance of LookerAuditLogsSecretsConfig from a dict
looker_audit_logs_secrets_config_from_dict = LookerAuditLogsSecretsConfig.from_dict(looker_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


