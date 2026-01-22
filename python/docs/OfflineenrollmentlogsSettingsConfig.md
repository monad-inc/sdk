# OfflineenrollmentlogsSettingsConfig

Duo Security Offline Enrollment Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The API hostname for your Duo Security integration. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.offlineenrollmentlogs_settings_config import OfflineenrollmentlogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OfflineenrollmentlogsSettingsConfig from a JSON string
offlineenrollmentlogs_settings_config_instance = OfflineenrollmentlogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(OfflineenrollmentlogsSettingsConfig.to_json())

# convert the object into a dict
offlineenrollmentlogs_settings_config_dict = offlineenrollmentlogs_settings_config_instance.to_dict()
# create an instance of OfflineenrollmentlogsSettingsConfig from a dict
offlineenrollmentlogs_settings_config_from_dict = OfflineenrollmentlogsSettingsConfig.from_dict(offlineenrollmentlogs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


