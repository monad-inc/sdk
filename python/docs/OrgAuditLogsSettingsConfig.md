# OrgAuditLogsSettingsConfig

GitHub organization audit logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** | Authentication type to use | [optional] 
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**github_app_installation_id** | **str** | GitHub App Installation ID (required when using GitHub App authentication) | [optional] 
**github_client_id** | **str** | GitHub Client ID (alternative to personal access token) | [optional] 
**include** | **str** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. | [optional] 
**organization** | **str** | Your GitHub organization name | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.org_audit_logs_settings_config import OrgAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OrgAuditLogsSettingsConfig from a JSON string
org_audit_logs_settings_config_instance = OrgAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(OrgAuditLogsSettingsConfig.to_json())

# convert the object into a dict
org_audit_logs_settings_config_dict = org_audit_logs_settings_config_instance.to_dict()
# create an instance of OrgAuditLogsSettingsConfig from a dict
org_audit_logs_settings_config_from_dict = OrgAuditLogsSettingsConfig.from_dict(org_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


