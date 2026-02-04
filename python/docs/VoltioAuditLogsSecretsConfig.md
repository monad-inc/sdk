# VoltioAuditLogsSecretsConfig

Volt.io Audit Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**username** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.voltio_audit_logs_secrets_config import VoltioAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VoltioAuditLogsSecretsConfig from a JSON string
voltio_audit_logs_secrets_config_instance = VoltioAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(VoltioAuditLogsSecretsConfig.to_json())

# convert the object into a dict
voltio_audit_logs_secrets_config_dict = voltio_audit_logs_secrets_config_instance.to_dict()
# create an instance of VoltioAuditLogsSecretsConfig from a dict
voltio_audit_logs_secrets_config_from_dict = VoltioAuditLogsSecretsConfig.from_dict(voltio_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


