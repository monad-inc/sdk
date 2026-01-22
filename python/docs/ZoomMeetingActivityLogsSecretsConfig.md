# ZoomMeetingActivityLogsSecretsConfig

Zoom Meeting Activity Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.zoom_meeting_activity_logs_secrets_config import ZoomMeetingActivityLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ZoomMeetingActivityLogsSecretsConfig from a JSON string
zoom_meeting_activity_logs_secrets_config_instance = ZoomMeetingActivityLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(ZoomMeetingActivityLogsSecretsConfig.to_json())

# convert the object into a dict
zoom_meeting_activity_logs_secrets_config_dict = zoom_meeting_activity_logs_secrets_config_instance.to_dict()
# create an instance of ZoomMeetingActivityLogsSecretsConfig from a dict
zoom_meeting_activity_logs_secrets_config_from_dict = ZoomMeetingActivityLogsSecretsConfig.from_dict(zoom_meeting_activity_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


