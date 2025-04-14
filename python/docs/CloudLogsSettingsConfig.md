# CloudLogsSettingsConfig

Google Cloud Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_proto_payload_parsing** | **bool** | Enables automatic parsing of embedded protocol buffer payloads within the input. | [optional] 
**filter** | **str** | The filter to apply to the logs. | [optional] 
**resource_names** | **List[str]** | The resources to query logs from. | [optional] 

## Example

```python
from monad.models.cloud_logs_settings_config import CloudLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudLogsSettingsConfig from a JSON string
cloud_logs_settings_config_instance = CloudLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudLogsSettingsConfig.to_json())

# convert the object into a dict
cloud_logs_settings_config_dict = cloud_logs_settings_config_instance.to_dict()
# create an instance of CloudLogsSettingsConfig from a dict
cloud_logs_settings_config_from_dict = CloudLogsSettingsConfig.from_dict(cloud_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


