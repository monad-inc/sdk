# AzureVirtualMachineSettingsConfig

Microsoft Azure Virtual Machine settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**subscription_id** | **str** | The subscription ID of Azure subscription | [optional] 
**tenant_id** | **str** | Tenant ID of the registered application on Azure Entra ID | [optional] 

## Example

```python
from monad.models.azure_virtual_machine_settings_config import AzureVirtualMachineSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVirtualMachineSettingsConfig from a JSON string
azure_virtual_machine_settings_config_instance = AzureVirtualMachineSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AzureVirtualMachineSettingsConfig.to_json())

# convert the object into a dict
azure_virtual_machine_settings_config_dict = azure_virtual_machine_settings_config_instance.to_dict()
# create an instance of AzureVirtualMachineSettingsConfig from a dict
azure_virtual_machine_settings_config_from_dict = AzureVirtualMachineSettingsConfig.from_dict(azure_virtual_machine_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


