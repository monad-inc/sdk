# AzureVnetFlowLogsSecretsConfig

Microsoft Azure Vnet Flow Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.azure_vnet_flow_logs_secrets_config import AzureVnetFlowLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVnetFlowLogsSecretsConfig from a JSON string
azure_vnet_flow_logs_secrets_config_instance = AzureVnetFlowLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AzureVnetFlowLogsSecretsConfig.to_json())

# convert the object into a dict
azure_vnet_flow_logs_secrets_config_dict = azure_vnet_flow_logs_secrets_config_instance.to_dict()
# create an instance of AzureVnetFlowLogsSecretsConfig from a dict
azure_vnet_flow_logs_secrets_config_from_dict = AzureVnetFlowLogsSecretsConfig.from_dict(azure_vnet_flow_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


