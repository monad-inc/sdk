# BrinqaAuditLogsSettingsConfig

Brinqa Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**hostname** | **str** | The Brinqa environment hostname (e.g., \&quot;ssb.brinqa.net\&quot;) | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.brinqa_audit_logs_settings_config import BrinqaAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BrinqaAuditLogsSettingsConfig from a JSON string
brinqa_audit_logs_settings_config_instance = BrinqaAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(BrinqaAuditLogsSettingsConfig.to_json())

# convert the object into a dict
brinqa_audit_logs_settings_config_dict = brinqa_audit_logs_settings_config_instance.to_dict()
# create an instance of BrinqaAuditLogsSettingsConfig from a dict
brinqa_audit_logs_settings_config_from_dict = BrinqaAuditLogsSettingsConfig.from_dict(brinqa_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


