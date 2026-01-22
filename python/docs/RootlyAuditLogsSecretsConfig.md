# RootlyAuditLogsSecretsConfig

Rootly Audit Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.rootly_audit_logs_secrets_config import RootlyAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RootlyAuditLogsSecretsConfig from a JSON string
rootly_audit_logs_secrets_config_instance = RootlyAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(RootlyAuditLogsSecretsConfig.to_json())

# convert the object into a dict
rootly_audit_logs_secrets_config_dict = rootly_audit_logs_secrets_config_instance.to_dict()
# create an instance of RootlyAuditLogsSecretsConfig from a dict
rootly_audit_logs_secrets_config_from_dict = RootlyAuditLogsSecretsConfig.from_dict(rootly_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


