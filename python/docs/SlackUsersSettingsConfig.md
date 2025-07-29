# SlackUsersSettingsConfig

Slack Users settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**team_id** | **str** | Team ID to filter user results by | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.slack_users_settings_config import SlackUsersSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SlackUsersSettingsConfig from a JSON string
slack_users_settings_config_instance = SlackUsersSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SlackUsersSettingsConfig.to_json())

# convert the object into a dict
slack_users_settings_config_dict = slack_users_settings_config_instance.to_dict()
# create an instance of SlackUsersSettingsConfig from a dict
slack_users_settings_config_from_dict = SlackUsersSettingsConfig.from_dict(slack_users_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


