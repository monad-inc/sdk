# ZendeskAuditLogsSettingsConfig

Zendesk Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** | AuthType is the type of authentication used for the input | [optional] 
**email_address** | **str** | This is the email address registered with your Zendesk account | [optional] 
**sub_domain** | **str** | This is the subdomain found in your Zendesk account URL For example, if the URL is https://demo.zendesk.com then the subdomain will be demo | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.zendesk_audit_logs_settings_config import ZendeskAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ZendeskAuditLogsSettingsConfig from a JSON string
zendesk_audit_logs_settings_config_instance = ZendeskAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ZendeskAuditLogsSettingsConfig.to_json())

# convert the object into a dict
zendesk_audit_logs_settings_config_dict = zendesk_audit_logs_settings_config_instance.to_dict()
# create an instance of ZendeskAuditLogsSettingsConfig from a dict
zendesk_audit_logs_settings_config_from_dict = ZendeskAuditLogsSettingsConfig.from_dict(zendesk_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


