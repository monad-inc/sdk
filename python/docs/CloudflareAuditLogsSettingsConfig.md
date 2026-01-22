# CloudflareAuditLogsSettingsConfig

Cloudflare Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Cloudflare Account ID | [optional] 
**backfill_start_time** | **str** | Date to start fetching data from (RFC3339 format) | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source | [optional] 

## Example

```python
from monad.models.cloudflare_audit_logs_settings_config import CloudflareAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareAuditLogsSettingsConfig from a JSON string
cloudflare_audit_logs_settings_config_instance = CloudflareAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareAuditLogsSettingsConfig.to_json())

# convert the object into a dict
cloudflare_audit_logs_settings_config_dict = cloudflare_audit_logs_settings_config_instance.to_dict()
# create an instance of CloudflareAuditLogsSettingsConfig from a dict
cloudflare_audit_logs_settings_config_from_dict = CloudflareAuditLogsSettingsConfig.from_dict(cloudflare_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


