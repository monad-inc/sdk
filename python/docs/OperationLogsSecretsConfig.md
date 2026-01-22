# OperationLogsSecretsConfig

Zoom Operation Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.operation_logs_secrets_config import OperationLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OperationLogsSecretsConfig from a JSON string
operation_logs_secrets_config_instance = OperationLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(OperationLogsSecretsConfig.to_json())

# convert the object into a dict
operation_logs_secrets_config_dict = operation_logs_secrets_config_instance.to_dict()
# create an instance of OperationLogsSecretsConfig from a dict
operation_logs_secrets_config_from_dict = OperationLogsSecretsConfig.from_dict(operation_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


