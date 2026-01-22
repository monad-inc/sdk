# CortexXsoarManagementLogsSettingsConfig

Palo Alto Cortex Xsoar Management Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key_id** | **str** | API Key ID for authentication | [optional] 
**backfill_start_time** | **str** | Start time for backfilling data | [optional] 
**domain_name** | **str** | Domain name of the Cortex XSOAR instance | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.cortex_xsoar_management_logs_settings_config import CortexXsoarManagementLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CortexXsoarManagementLogsSettingsConfig from a JSON string
cortex_xsoar_management_logs_settings_config_instance = CortexXsoarManagementLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CortexXsoarManagementLogsSettingsConfig.to_json())

# convert the object into a dict
cortex_xsoar_management_logs_settings_config_dict = cortex_xsoar_management_logs_settings_config_instance.to_dict()
# create an instance of CortexXsoarManagementLogsSettingsConfig from a dict
cortex_xsoar_management_logs_settings_config_from_dict = CortexXsoarManagementLogsSettingsConfig.from_dict(cortex_xsoar_management_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


