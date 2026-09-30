# EksAuditLogsSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.eks_audit_logs_secrets_config import EksAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EksAuditLogsSecretsConfig from a JSON string
eks_audit_logs_secrets_config_instance = EksAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(EksAuditLogsSecretsConfig.to_json())

# convert the object into a dict
eks_audit_logs_secrets_config_dict = eks_audit_logs_secrets_config_instance.to_dict()
# create an instance of EksAuditLogsSecretsConfig from a dict
eks_audit_logs_secrets_config_from_dict = EksAuditLogsSecretsConfig.from_dict(eks_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


