# ZoomMeetingActivityLogsSettingsConfig

Zoom Meeting Activity Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID for the input | [optional] 
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, data from 6 months ago up till now from zoom is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.zoom_meeting_activity_logs_settings_config import ZoomMeetingActivityLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ZoomMeetingActivityLogsSettingsConfig from a JSON string
zoom_meeting_activity_logs_settings_config_instance = ZoomMeetingActivityLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ZoomMeetingActivityLogsSettingsConfig.to_json())

# convert the object into a dict
zoom_meeting_activity_logs_settings_config_dict = zoom_meeting_activity_logs_settings_config_instance.to_dict()
# create an instance of ZoomMeetingActivityLogsSettingsConfig from a dict
zoom_meeting_activity_logs_settings_config_from_dict = ZoomMeetingActivityLogsSettingsConfig.from_dict(zoom_meeting_activity_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


