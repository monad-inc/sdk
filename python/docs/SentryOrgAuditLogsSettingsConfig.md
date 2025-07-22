# SentryOrgAuditLogsSettingsConfig

Sentry Organization Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_name** | **str** | For self-hosted, specify your host name here. Otherwise, leave it default as sentry.io. | [optional] 
**org_slug** | **str** | The ID or slug of the organization | [optional] 

## Example

```python
from monad.models.sentry_org_audit_logs_settings_config import SentryOrgAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SentryOrgAuditLogsSettingsConfig from a JSON string
sentry_org_audit_logs_settings_config_instance = SentryOrgAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SentryOrgAuditLogsSettingsConfig.to_json())

# convert the object into a dict
sentry_org_audit_logs_settings_config_dict = sentry_org_audit_logs_settings_config_instance.to_dict()
# create an instance of SentryOrgAuditLogsSettingsConfig from a dict
sentry_org_audit_logs_settings_config_from_dict = SentryOrgAuditLogsSettingsConfig.from_dict(sentry_org_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


