# DriveActivitySettingsConfig

Google Workspace Drive Activity settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address to use for authenticating with Google Cloud. | [optional] 

## Example

```python
from monad.models.drive_activity_settings_config import DriveActivitySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DriveActivitySettingsConfig from a JSON string
drive_activity_settings_config_instance = DriveActivitySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DriveActivitySettingsConfig.to_json())

# convert the object into a dict
drive_activity_settings_config_dict = drive_activity_settings_config_instance.to_dict()
# create an instance of DriveActivitySettingsConfig from a dict
drive_activity_settings_config_from_dict = DriveActivitySettingsConfig.from_dict(drive_activity_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


