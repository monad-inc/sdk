# AuditLogsSettingsConfig

GitHub audit logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | Filter by specific actions. Use wildcards for broader matches (e.g., repo.*) | [optional] 
**actor** | **str** | Filter by the username that initiated the action | [optional] 
**country** | **str** | Filter by actor&#39;s country code (e.g., US) | [optional] 
**created_after** | **str** | Only return audit log entries after this RFC3339 formatted time stamp | [optional] 
**enterprise** | **str** | Your GitHub enterprise slug or ID | [optional] 
**include** | **str** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. | [optional] 
**organization** | **str** | Filter by organization name | [optional] 
**repository** | **str** | Filter by repository (format: org-name/repo-name) | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**user** | **str** | Filter by the username that was affected by the action | [optional] 

## Example

```python
from monad.models.audit_logs_settings_config import AuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AuditLogsSettingsConfig from a JSON string
audit_logs_settings_config_instance = AuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AuditLogsSettingsConfig.to_json())

# convert the object into a dict
audit_logs_settings_config_dict = audit_logs_settings_config_instance.to_dict()
# create an instance of AuditLogsSettingsConfig from a dict
audit_logs_settings_config_from_dict = AuditLogsSettingsConfig.from_dict(audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


