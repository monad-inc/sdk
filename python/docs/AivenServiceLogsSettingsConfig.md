# AivenServiceLogsSettingsConfig

Aiven Service Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**project** | **str** | The Aiven project name | [optional] 
**service** | **str** | The Aiven service name | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.aiven_service_logs_settings_config import AivenServiceLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AivenServiceLogsSettingsConfig from a JSON string
aiven_service_logs_settings_config_instance = AivenServiceLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AivenServiceLogsSettingsConfig.to_json())

# convert the object into a dict
aiven_service_logs_settings_config_dict = aiven_service_logs_settings_config_instance.to_dict()
# create an instance of AivenServiceLogsSettingsConfig from a dict
aiven_service_logs_settings_config_from_dict = AivenServiceLogsSettingsConfig.from_dict(aiven_service_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


