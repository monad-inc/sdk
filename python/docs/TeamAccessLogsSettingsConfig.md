# TeamAccessLogsSettingsConfig

Slack Team Access Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Start time for backfilling data | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.team_access_logs_settings_config import TeamAccessLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TeamAccessLogsSettingsConfig from a JSON string
team_access_logs_settings_config_instance = TeamAccessLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(TeamAccessLogsSettingsConfig.to_json())

# convert the object into a dict
team_access_logs_settings_config_dict = team_access_logs_settings_config_instance.to_dict()
# create an instance of TeamAccessLogsSettingsConfig from a dict
team_access_logs_settings_config_from_dict = TeamAccessLogsSettingsConfig.from_dict(team_access_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


