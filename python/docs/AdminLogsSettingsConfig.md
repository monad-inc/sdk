# AdminLogsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** |  | [optional] 

## Example

```python
from monad.models.admin_logs_settings_config import AdminLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdminLogsSettingsConfig from a JSON string
admin_logs_settings_config_instance = AdminLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AdminLogsSettingsConfig.to_json())

# convert the object into a dict
admin_logs_settings_config_dict = admin_logs_settings_config_instance.to_dict()
# create an instance of AdminLogsSettingsConfig from a dict
admin_logs_settings_config_from_dict = AdminLogsSettingsConfig.from_dict(admin_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


