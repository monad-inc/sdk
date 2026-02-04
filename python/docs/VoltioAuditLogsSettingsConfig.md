# VoltioAuditLogsSettingsConfig

Volt.io Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, defaults to 90 days ago. All syncs thereafter will be incremental. | [optional] 
**base_url** | **str** | Base URL of your Volt.io API instance (e.g., https://api.volt.io) | [optional] 
**customer_id** | **str** | Optional: Filter audit logs by specific customer ID | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.voltio_audit_logs_settings_config import VoltioAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VoltioAuditLogsSettingsConfig from a JSON string
voltio_audit_logs_settings_config_instance = VoltioAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(VoltioAuditLogsSettingsConfig.to_json())

# convert the object into a dict
voltio_audit_logs_settings_config_dict = voltio_audit_logs_settings_config_instance.to_dict()
# create an instance of VoltioAuditLogsSettingsConfig from a dict
voltio_audit_logs_settings_config_from_dict = VoltioAuditLogsSettingsConfig.from_dict(voltio_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


