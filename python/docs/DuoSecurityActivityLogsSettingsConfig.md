# DuoSecurityActivityLogsSettingsConfig

Duo Security Activity Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The API hostname for your Duo Security integration. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.duo_security_activity_logs_settings_config import DuoSecurityActivityLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DuoSecurityActivityLogsSettingsConfig from a JSON string
duo_security_activity_logs_settings_config_instance = DuoSecurityActivityLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DuoSecurityActivityLogsSettingsConfig.to_json())

# convert the object into a dict
duo_security_activity_logs_settings_config_dict = duo_security_activity_logs_settings_config_instance.to_dict()
# create an instance of DuoSecurityActivityLogsSettingsConfig from a dict
duo_security_activity_logs_settings_config_from_dict = DuoSecurityActivityLogsSettingsConfig.from_dict(duo_security_activity_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


