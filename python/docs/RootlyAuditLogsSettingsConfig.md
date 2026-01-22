# RootlyAuditLogsSettingsConfig

Rootly Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.rootly_audit_logs_settings_config import RootlyAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RootlyAuditLogsSettingsConfig from a JSON string
rootly_audit_logs_settings_config_instance = RootlyAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(RootlyAuditLogsSettingsConfig.to_json())

# convert the object into a dict
rootly_audit_logs_settings_config_dict = rootly_audit_logs_settings_config_instance.to_dict()
# create an instance of RootlyAuditLogsSettingsConfig from a dict
rootly_audit_logs_settings_config_from_dict = RootlyAuditLogsSettingsConfig.from_dict(rootly_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


