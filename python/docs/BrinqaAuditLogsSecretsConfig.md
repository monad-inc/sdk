# BrinqaAuditLogsSecretsConfig

Brinqa Audit Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**username** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.brinqa_audit_logs_secrets_config import BrinqaAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BrinqaAuditLogsSecretsConfig from a JSON string
brinqa_audit_logs_secrets_config_instance = BrinqaAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(BrinqaAuditLogsSecretsConfig.to_json())

# convert the object into a dict
brinqa_audit_logs_secrets_config_dict = brinqa_audit_logs_secrets_config_instance.to_dict()
# create an instance of BrinqaAuditLogsSecretsConfig from a dict
brinqa_audit_logs_secrets_config_from_dict = BrinqaAuditLogsSecretsConfig.from_dict(brinqa_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


