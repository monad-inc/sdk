# GreenhouseAuditLogsSettingsConfig

Greenhouse Audit Log settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**user_id** | **str** | ID of the user to harvest audit logs for | [optional] 

## Example

```python
from monad.models.greenhouse_audit_logs_settings_config import GreenhouseAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GreenhouseAuditLogsSettingsConfig from a JSON string
greenhouse_audit_logs_settings_config_instance = GreenhouseAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(GreenhouseAuditLogsSettingsConfig.to_json())

# convert the object into a dict
greenhouse_audit_logs_settings_config_dict = greenhouse_audit_logs_settings_config_instance.to_dict()
# create an instance of GreenhouseAuditLogsSettingsConfig from a dict
greenhouse_audit_logs_settings_config_from_dict = GreenhouseAuditLogsSettingsConfig.from_dict(greenhouse_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


