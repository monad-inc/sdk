# EndorLabsAuditLogsSecretsConfig

Endor Labs Audit Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**api_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.endor_labs_audit_logs_secrets_config import EndorLabsAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EndorLabsAuditLogsSecretsConfig from a JSON string
endor_labs_audit_logs_secrets_config_instance = EndorLabsAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(EndorLabsAuditLogsSecretsConfig.to_json())

# convert the object into a dict
endor_labs_audit_logs_secrets_config_dict = endor_labs_audit_logs_secrets_config_instance.to_dict()
# create an instance of EndorLabsAuditLogsSecretsConfig from a dict
endor_labs_audit_logs_secrets_config_from_dict = EndorLabsAuditLogsSecretsConfig.from_dict(endor_labs_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


