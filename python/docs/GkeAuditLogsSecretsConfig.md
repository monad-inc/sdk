# GkeAuditLogsSecretsConfig

GKE Audit Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.gke_audit_logs_secrets_config import GkeAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GkeAuditLogsSecretsConfig from a JSON string
gke_audit_logs_secrets_config_instance = GkeAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(GkeAuditLogsSecretsConfig.to_json())

# convert the object into a dict
gke_audit_logs_secrets_config_dict = gke_audit_logs_secrets_config_instance.to_dict()
# create an instance of GkeAuditLogsSecretsConfig from a dict
gke_audit_logs_secrets_config_from_dict = GkeAuditLogsSecretsConfig.from_dict(gke_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


