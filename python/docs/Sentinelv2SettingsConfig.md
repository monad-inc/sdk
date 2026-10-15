# Sentinelv2SettingsConfig

Sentinel Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dcr_config** | [**Sentinelv2DCRConfig**](Sentinelv2DCRConfig.md) |  | 
**endpoint** | **str** | The Azure Monitor Data Collection Rule (DCR) ingestion endpoint URL. | 
**stream_name** | **str** | The name of the data stream defined in the Data Collection Rule. | 

## Example

```python
from monad.models.sentinelv2_settings_config import Sentinelv2SettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of Sentinelv2SettingsConfig from a JSON string
sentinelv2_settings_config_instance = Sentinelv2SettingsConfig.from_json(json)
# print the JSON string representation of the object
print(Sentinelv2SettingsConfig.to_json())

# convert the object into a dict
sentinelv2_settings_config_dict = sentinelv2_settings_config_instance.to_dict()
# create an instance of Sentinelv2SettingsConfig from a dict
sentinelv2_settings_config_from_dict = Sentinelv2SettingsConfig.from_dict(sentinelv2_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


