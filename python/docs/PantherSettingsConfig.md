# PantherSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_ingest_url** | **str** |  | [optional] 

## Example

```python
from monad.models.panther_settings_config import PantherSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PantherSettingsConfig from a JSON string
panther_settings_config_instance = PantherSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(PantherSettingsConfig.to_json())

# convert the object into a dict
panther_settings_config_dict = panther_settings_config_instance.to_dict()
# create an instance of PantherSettingsConfig from a dict
panther_settings_config_from_dict = PantherSettingsConfig.from_dict(panther_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


