# MonadHttpSettingsConfig

Monad HTTP settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_url** | **str** | URL of the organization to monitor | [optional] 

## Example

```python
from monad.models.monad_http_settings_config import MonadHttpSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MonadHttpSettingsConfig from a JSON string
monad_http_settings_config_instance = MonadHttpSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(MonadHttpSettingsConfig.to_json())

# convert the object into a dict
monad_http_settings_config_dict = monad_http_settings_config_instance.to_dict()
# create an instance of MonadHttpSettingsConfig from a dict
monad_http_settings_config_from_dict = MonadHttpSettingsConfig.from_dict(monad_http_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


