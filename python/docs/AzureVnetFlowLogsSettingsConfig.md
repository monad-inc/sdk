# AzureVnetFlowLogsSettingsConfig

Microsoft Azure Vnet Flow Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prefix** | **str** |  | [optional] 
**region** | **str** | The Azure region where the virtual network is located | [optional] 
**resource_group_name** | **str** | The name of the resource group containing the virtual network | [optional] 
**storage_account_url** | **str** | The Azure storage account URL where flow logs are stored | [optional] 
**subscription_id** | **str** | The Azure subscription ID where the virtual network and storage account are located | [optional] 
**tenant_id** | **str** | The Azure Entra ID tenant (directory) ID. | [optional] 
**virtual_network_name** | **str** | The name of the virtual network for which flow logs are being collected | [optional] 

## Example

```python
from monad.models.azure_vnet_flow_logs_settings_config import AzureVnetFlowLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVnetFlowLogsSettingsConfig from a JSON string
azure_vnet_flow_logs_settings_config_instance = AzureVnetFlowLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AzureVnetFlowLogsSettingsConfig.to_json())

# convert the object into a dict
azure_vnet_flow_logs_settings_config_dict = azure_vnet_flow_logs_settings_config_instance.to_dict()
# create an instance of AzureVnetFlowLogsSettingsConfig from a dict
azure_vnet_flow_logs_settings_config_from_dict = AzureVnetFlowLogsSettingsConfig.from_dict(azure_vnet_flow_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


