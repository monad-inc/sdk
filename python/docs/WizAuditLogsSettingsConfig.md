# WizAuditLogsSettingsConfig

Wiz Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from up to 180 days. If not specified, a sync of 180 days back is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**tenant_data_center** | **str** | DataCenter represents the tenant&#39;s data center location. Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.wiz_audit_logs_settings_config import WizAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WizAuditLogsSettingsConfig from a JSON string
wiz_audit_logs_settings_config_instance = WizAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(WizAuditLogsSettingsConfig.to_json())

# convert the object into a dict
wiz_audit_logs_settings_config_dict = wiz_audit_logs_settings_config_instance.to_dict()
# create an instance of WizAuditLogsSettingsConfig from a dict
wiz_audit_logs_settings_config_from_dict = WizAuditLogsSettingsConfig.from_dict(wiz_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


