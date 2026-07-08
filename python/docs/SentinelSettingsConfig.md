# SentinelSettingsConfig

Sentinel Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | The Azure Monitor Data Collection Rule (DCR) ingestion endpoint URL. | [optional] 
**rule_id** | **str** | The unique identifier of the Data Collection Rule (DCR). | [optional] 
**stream_name** | **str** | The name of the data stream defined in the Data Collection Rule. | [optional] 

## Example

```python
from monad.models.sentinel_settings_config import SentinelSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SentinelSettingsConfig from a JSON string
sentinel_settings_config_instance = SentinelSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SentinelSettingsConfig.to_json())

# convert the object into a dict
sentinel_settings_config_dict = sentinel_settings_config_instance.to_dict()
# create an instance of SentinelSettingsConfig from a dict
sentinel_settings_config_from_dict = SentinelSettingsConfig.from_dict(sentinel_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


