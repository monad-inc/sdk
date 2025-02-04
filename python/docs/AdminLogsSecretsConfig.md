# AdminLogsSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.admin_logs_secrets_config import AdminLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdminLogsSecretsConfig from a JSON string
admin_logs_secrets_config_instance = AdminLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AdminLogsSecretsConfig.to_json())

# convert the object into a dict
admin_logs_secrets_config_dict = admin_logs_secrets_config_instance.to_dict()
# create an instance of AdminLogsSecretsConfig from a dict
admin_logs_secrets_config_from_dict = AdminLogsSecretsConfig.from_dict(admin_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


