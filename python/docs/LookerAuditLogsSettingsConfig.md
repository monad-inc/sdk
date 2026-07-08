# LookerAuditLogsSettingsConfig

Looker Core Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_categories** | **List[str]** | The audit log categories to ingest. | 
**project_ids** | **List[str]** | The GCP project IDs hosting Looker Core instances. | 

## Example

```python
from monad.models.looker_audit_logs_settings_config import LookerAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LookerAuditLogsSettingsConfig from a JSON string
looker_audit_logs_settings_config_instance = LookerAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(LookerAuditLogsSettingsConfig.to_json())

# convert the object into a dict
looker_audit_logs_settings_config_dict = looker_audit_logs_settings_config_instance.to_dict()
# create an instance of LookerAuditLogsSettingsConfig from a dict
looker_audit_logs_settings_config_from_dict = LookerAuditLogsSettingsConfig.from_dict(looker_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


