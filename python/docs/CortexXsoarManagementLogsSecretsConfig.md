# CortexXsoarManagementLogsSecretsConfig

Palo Alto Cortex Xsoar Management Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cortex_xsoar_management_logs_secrets_config import CortexXsoarManagementLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CortexXsoarManagementLogsSecretsConfig from a JSON string
cortex_xsoar_management_logs_secrets_config_instance = CortexXsoarManagementLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CortexXsoarManagementLogsSecretsConfig.to_json())

# convert the object into a dict
cortex_xsoar_management_logs_secrets_config_dict = cortex_xsoar_management_logs_secrets_config_instance.to_dict()
# create an instance of CortexXsoarManagementLogsSecretsConfig from a dict
cortex_xsoar_management_logs_secrets_config_from_dict = CortexXsoarManagementLogsSecretsConfig.from_dict(cortex_xsoar_management_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


