# SentryOrgAuditLogsSecretsConfig

Sentry Organization Audit Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.sentry_org_audit_logs_secrets_config import SentryOrgAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SentryOrgAuditLogsSecretsConfig from a JSON string
sentry_org_audit_logs_secrets_config_instance = SentryOrgAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SentryOrgAuditLogsSecretsConfig.to_json())

# convert the object into a dict
sentry_org_audit_logs_secrets_config_dict = sentry_org_audit_logs_secrets_config_instance.to_dict()
# create an instance of SentryOrgAuditLogsSecretsConfig from a dict
sentry_org_audit_logs_secrets_config_from_dict = SentryOrgAuditLogsSecretsConfig.from_dict(sentry_org_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


