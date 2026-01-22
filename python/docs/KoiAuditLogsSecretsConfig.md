# KoiAuditLogsSecretsConfig

Koi audit logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.koi_audit_logs_secrets_config import KoiAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KoiAuditLogsSecretsConfig from a JSON string
koi_audit_logs_secrets_config_instance = KoiAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(KoiAuditLogsSecretsConfig.to_json())

# convert the object into a dict
koi_audit_logs_secrets_config_dict = koi_audit_logs_secrets_config_instance.to_dict()
# create an instance of KoiAuditLogsSecretsConfig from a dict
koi_audit_logs_secrets_config_from_dict = KoiAuditLogsSecretsConfig.from_dict(koi_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


