# OwnbackupAccountEventsSettingsConfig

Ownbackup Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **str** | Region of the OwnBackup instance | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.ownbackup_account_events_settings_config import OwnbackupAccountEventsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OwnbackupAccountEventsSettingsConfig from a JSON string
ownbackup_account_events_settings_config_instance = OwnbackupAccountEventsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(OwnbackupAccountEventsSettingsConfig.to_json())

# convert the object into a dict
ownbackup_account_events_settings_config_dict = ownbackup_account_events_settings_config_instance.to_dict()
# create an instance of OwnbackupAccountEventsSettingsConfig from a dict
ownbackup_account_events_settings_config_from_dict = OwnbackupAccountEventsSettingsConfig.from_dict(ownbackup_account_events_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


