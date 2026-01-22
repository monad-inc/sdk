# PostmanAuditLogsSettingsConfig

Postman Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 

## Example

```python
from monad.models.postman_audit_logs_settings_config import PostmanAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PostmanAuditLogsSettingsConfig from a JSON string
postman_audit_logs_settings_config_instance = PostmanAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(PostmanAuditLogsSettingsConfig.to_json())

# convert the object into a dict
postman_audit_logs_settings_config_dict = postman_audit_logs_settings_config_instance.to_dict()
# create an instance of PostmanAuditLogsSettingsConfig from a dict
postman_audit_logs_settings_config_from_dict = PostmanAuditLogsSettingsConfig.from_dict(postman_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


