# TinesAuditLogsSecretsConfig

Tines Audit Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.tines_audit_logs_secrets_config import TinesAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TinesAuditLogsSecretsConfig from a JSON string
tines_audit_logs_secrets_config_instance = TinesAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(TinesAuditLogsSecretsConfig.to_json())

# convert the object into a dict
tines_audit_logs_secrets_config_dict = tines_audit_logs_secrets_config_instance.to_dict()
# create an instance of TinesAuditLogsSecretsConfig from a dict
tines_audit_logs_secrets_config_from_dict = TinesAuditLogsSecretsConfig.from_dict(tines_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


