# EndorLabsAuditLogsSettingsConfig

Endor Labs Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**namespace** | **str** | Your Endor Labs organization namespace (e.g., \&quot;your-org\&quot;) | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.endor_labs_audit_logs_settings_config import EndorLabsAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EndorLabsAuditLogsSettingsConfig from a JSON string
endor_labs_audit_logs_settings_config_instance = EndorLabsAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(EndorLabsAuditLogsSettingsConfig.to_json())

# convert the object into a dict
endor_labs_audit_logs_settings_config_dict = endor_labs_audit_logs_settings_config_instance.to_dict()
# create an instance of EndorLabsAuditLogsSettingsConfig from a dict
endor_labs_audit_logs_settings_config_from_dict = EndorLabsAuditLogsSettingsConfig.from_dict(endor_labs_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


