# OperationLogsSettingsConfig

Zoom Operation Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID for the input | [optional] 
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, data from 6 months ago up till now from zoom is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**category_type** | **str** | The category of logs to pull | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.operation_logs_settings_config import OperationLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OperationLogsSettingsConfig from a JSON string
operation_logs_settings_config_instance = OperationLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(OperationLogsSettingsConfig.to_json())

# convert the object into a dict
operation_logs_settings_config_dict = operation_logs_settings_config_instance.to_dict()
# create an instance of OperationLogsSettingsConfig from a dict
operation_logs_settings_config_from_dict = OperationLogsSettingsConfig.from_dict(operation_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


