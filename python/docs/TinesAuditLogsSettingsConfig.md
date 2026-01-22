# TinesAuditLogsSettingsConfig

Tines Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, will fetch from the most recent data available. | [optional] 
**operation_names** | **List[str]** | Filter by specific operation names (optional) | [optional] 
**tenant_domain** | **str** | The Tines tenant domain (e.g., your-org.tines.com) | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**user_ids** | **List[str]** | Filter by specific user IDs (optional) | [optional] 

## Example

```python
from monad.models.tines_audit_logs_settings_config import TinesAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TinesAuditLogsSettingsConfig from a JSON string
tines_audit_logs_settings_config_instance = TinesAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(TinesAuditLogsSettingsConfig.to_json())

# convert the object into a dict
tines_audit_logs_settings_config_dict = tines_audit_logs_settings_config_instance.to_dict()
# create an instance of TinesAuditLogsSettingsConfig from a dict
tines_audit_logs_settings_config_from_dict = TinesAuditLogsSettingsConfig.from_dict(tines_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


