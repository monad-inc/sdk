# GreenhouseAuditLogsSecretsConfig

Greenhouse Audit Log secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**harvest_api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.greenhouse_audit_logs_secrets_config import GreenhouseAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GreenhouseAuditLogsSecretsConfig from a JSON string
greenhouse_audit_logs_secrets_config_instance = GreenhouseAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(GreenhouseAuditLogsSecretsConfig.to_json())

# convert the object into a dict
greenhouse_audit_logs_secrets_config_dict = greenhouse_audit_logs_secrets_config_instance.to_dict()
# create an instance of GreenhouseAuditLogsSecretsConfig from a dict
greenhouse_audit_logs_secrets_config_from_dict = GreenhouseAuditLogsSecretsConfig.from_dict(greenhouse_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


