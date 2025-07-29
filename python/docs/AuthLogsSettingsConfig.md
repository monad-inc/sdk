# AuthLogsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** |  | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.auth_logs_settings_config import AuthLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AuthLogsSettingsConfig from a JSON string
auth_logs_settings_config_instance = AuthLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AuthLogsSettingsConfig.to_json())

# convert the object into a dict
auth_logs_settings_config_dict = auth_logs_settings_config_instance.to_dict()
# create an instance of AuthLogsSettingsConfig from a dict
auth_logs_settings_config_from_dict = AuthLogsSettingsConfig.from_dict(auth_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


