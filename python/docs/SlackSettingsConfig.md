# SlackSettingsConfig

Slack Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_config** | [**SlackAuthConfig**](SlackAuthConfig.md) |  | [optional] 
**message_template** | **str** |  | [optional] 

## Example

```python
from monad.models.slack_settings_config import SlackSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SlackSettingsConfig from a JSON string
slack_settings_config_instance = SlackSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SlackSettingsConfig.to_json())

# convert the object into a dict
slack_settings_config_dict = slack_settings_config_instance.to_dict()
# create an instance of SlackSettingsConfig from a dict
slack_settings_config_from_dict = SlackSettingsConfig.from_dict(slack_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


