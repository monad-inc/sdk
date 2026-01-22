# ZoomActivityLogsSecretsConfig

Zoom Operation Logs secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.zoom_activity_logs_secrets_config import ZoomActivityLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ZoomActivityLogsSecretsConfig from a JSON string
zoom_activity_logs_secrets_config_instance = ZoomActivityLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(ZoomActivityLogsSecretsConfig.to_json())

# convert the object into a dict
zoom_activity_logs_secrets_config_dict = zoom_activity_logs_secrets_config_instance.to_dict()
# create an instance of ZoomActivityLogsSecretsConfig from a dict
zoom_activity_logs_secrets_config_from_dict = ZoomActivityLogsSecretsConfig.from_dict(zoom_activity_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


