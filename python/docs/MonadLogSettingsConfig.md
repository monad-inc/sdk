# MonadLogSettingsConfig

Monad Log settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_type** | **str** |  | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.monad_log_settings_config import MonadLogSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MonadLogSettingsConfig from a JSON string
monad_log_settings_config_instance = MonadLogSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(MonadLogSettingsConfig.to_json())

# convert the object into a dict
monad_log_settings_config_dict = monad_log_settings_config_instance.to_dict()
# create an instance of MonadLogSettingsConfig from a dict
monad_log_settings_config_from_dict = MonadLogSettingsConfig.from_dict(monad_log_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


