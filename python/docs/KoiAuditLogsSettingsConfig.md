# KoiAuditLogsSettingsConfig

Koi audit logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_log_types** | **List[str]** | Filter audit logs by type(s). Available types: approval_requests, devices, endpoints, extensions, firewall. Leave empty to fetch all types. | [optional] 
**backfill_start_time** | **str** | BackfillStartTime is an optional ISO8601 timestamp to start fetching from. If not set, the input starts from the current time (no historical backfill). Example: \&quot;2024-01-01T00:00:00Z\&quot; | [optional] 
**base_url** | **str** | Base URL for the Koi API (default: https://api.prod.koi.security) | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.koi_audit_logs_settings_config import KoiAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KoiAuditLogsSettingsConfig from a JSON string
koi_audit_logs_settings_config_instance = KoiAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(KoiAuditLogsSettingsConfig.to_json())

# convert the object into a dict
koi_audit_logs_settings_config_dict = koi_audit_logs_settings_config_instance.to_dict()
# create an instance of KoiAuditLogsSettingsConfig from a dict
koi_audit_logs_settings_config_from_dict = KoiAuditLogsSettingsConfig.from_dict(koi_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


