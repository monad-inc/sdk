# SlackEnterpriseAuditLogsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. Dates before March 2018 are valid but will result in an error during validation. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.slack_enterprise_audit_logs_settings_config import SlackEnterpriseAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SlackEnterpriseAuditLogsSettingsConfig from a JSON string
slack_enterprise_audit_logs_settings_config_instance = SlackEnterpriseAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SlackEnterpriseAuditLogsSettingsConfig.to_json())

# convert the object into a dict
slack_enterprise_audit_logs_settings_config_dict = slack_enterprise_audit_logs_settings_config_instance.to_dict()
# create an instance of SlackEnterpriseAuditLogsSettingsConfig from a dict
slack_enterprise_audit_logs_settings_config_from_dict = SlackEnterpriseAuditLogsSettingsConfig.from_dict(slack_enterprise_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


