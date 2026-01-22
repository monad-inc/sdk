# ArizeAuditLogsSettingsConfig

Arize authenticated audit logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. | [optional] 
**interval_seconds** | **int** | Time interval in seconds between consecutive GraphQL API calls | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source | [optional] 

## Example

```python
from monad.models.arize_audit_logs_settings_config import ArizeAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ArizeAuditLogsSettingsConfig from a JSON string
arize_audit_logs_settings_config_instance = ArizeAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ArizeAuditLogsSettingsConfig.to_json())

# convert the object into a dict
arize_audit_logs_settings_config_dict = arize_audit_logs_settings_config_instance.to_dict()
# create an instance of ArizeAuditLogsSettingsConfig from a dict
arize_audit_logs_settings_config_from_dict = ArizeAuditLogsSettingsConfig.from_dict(arize_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


