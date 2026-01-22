# PostmanAuditLogsSecretsConfig

Postman Audit Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.postman_audit_logs_secrets_config import PostmanAuditLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PostmanAuditLogsSecretsConfig from a JSON string
postman_audit_logs_secrets_config_instance = PostmanAuditLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(PostmanAuditLogsSecretsConfig.to_json())

# convert the object into a dict
postman_audit_logs_secrets_config_dict = postman_audit_logs_secrets_config_instance.to_dict()
# create an instance of PostmanAuditLogsSecretsConfig from a dict
postman_audit_logs_secrets_config_from_dict = PostmanAuditLogsSecretsConfig.from_dict(postman_audit_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


