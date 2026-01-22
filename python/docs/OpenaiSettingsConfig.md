# OpenaiSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.openai_settings_config import OpenaiSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OpenaiSettingsConfig from a JSON string
openai_settings_config_instance = OpenaiSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(OpenaiSettingsConfig.to_json())

# convert the object into a dict
openai_settings_config_dict = openai_settings_config_instance.to_dict()
# create an instance of OpenaiSettingsConfig from a dict
openai_settings_config_from_dict = OpenaiSettingsConfig.from_dict(openai_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


