# AksAuditLogsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** |  | [optional] 
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**cluster_resource_id** | **str** |  | [optional] 
**log_category** | **str** |  | 
**source** | [**AksAuditLogsSourceConfig**](AksAuditLogsSourceConfig.md) |  | [optional] 
**tenant_id** | **str** |  | 
**use_synthetic_data** | **bool** |  | [optional] 

## Example

```python
from monad.models.aks_audit_logs_settings_config import AksAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AksAuditLogsSettingsConfig from a JSON string
aks_audit_logs_settings_config_instance = AksAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AksAuditLogsSettingsConfig.to_json())

# convert the object into a dict
aks_audit_logs_settings_config_dict = aks_audit_logs_settings_config_instance.to_dict()
# create an instance of AksAuditLogsSettingsConfig from a dict
aks_audit_logs_settings_config_from_dict = AksAuditLogsSettingsConfig.from_dict(aks_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


