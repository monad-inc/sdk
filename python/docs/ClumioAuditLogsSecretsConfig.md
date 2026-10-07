# ClumioAuditLogsSecretsConfig

Clumio Audit Trails secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.clumio_audit_logs_secrets_config import ClumioAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ClumioAuditLogsSecretsConfig from a JSON string
clumio_audit_logs_secrets_config_instance = ClumioAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(ClumioAuditLogsSecretsConfig.to_json())

# convert the object into a dict
clumio_audit_logs_secrets_config_dict = clumio_audit_logs_secrets_config_instance.to_dict()
# create an instance of ClumioAuditLogsSecretsConfig from a dict
clumio_audit_logs_secrets_config_from_dict = ClumioAuditLogsSecretsConfig.from_dict(clumio_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


