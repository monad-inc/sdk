# ArizeAuditLogsSecretsConfig

Arize authenticated audit logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.arize_audit_logs_secrets_config import ArizeAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ArizeAuditLogsSecretsConfig from a JSON string
arize_audit_logs_secrets_config_instance = ArizeAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(ArizeAuditLogsSecretsConfig.to_json())

# convert the object into a dict
arize_audit_logs_secrets_config_dict = arize_audit_logs_secrets_config_instance.to_dict()
# create an instance of ArizeAuditLogsSecretsConfig from a dict
arize_audit_logs_secrets_config_from_dict = ArizeAuditLogsSecretsConfig.from_dict(arize_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


