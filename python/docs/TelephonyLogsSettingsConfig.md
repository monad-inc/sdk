# TelephonyLogsSettingsConfig

Duo Security Telephony Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The API hostname for your Duo Security integration. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.telephony_logs_settings_config import TelephonyLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TelephonyLogsSettingsConfig from a JSON string
telephony_logs_settings_config_instance = TelephonyLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(TelephonyLogsSettingsConfig.to_json())

# convert the object into a dict
telephony_logs_settings_config_dict = telephony_logs_settings_config_instance.to_dict()
# create an instance of TelephonyLogsSettingsConfig from a dict
telephony_logs_settings_config_from_dict = TelephonyLogsSettingsConfig.from_dict(telephony_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


