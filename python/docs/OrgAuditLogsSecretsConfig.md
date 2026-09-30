# OrgAuditLogsSecretsConfig

GitHub organization audit logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**github_app_private_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**personal_access_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.org_audit_logs_secrets_config import OrgAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OrgAuditLogsSecretsConfig from a JSON string
org_audit_logs_secrets_config_instance = OrgAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(OrgAuditLogsSecretsConfig.to_json())

# convert the object into a dict
org_audit_logs_secrets_config_dict = org_audit_logs_secrets_config_instance.to_dict()
# create an instance of OrgAuditLogsSecretsConfig from a dict
org_audit_logs_secrets_config_from_dict = OrgAuditLogsSecretsConfig.from_dict(org_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


