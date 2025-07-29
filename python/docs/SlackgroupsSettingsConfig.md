# SlackgroupsSettingsConfig

Slack Groups settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**team_id** | **str** | Team ID to filter user results by | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.slackgroups_settings_config import SlackgroupsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SlackgroupsSettingsConfig from a JSON string
slackgroups_settings_config_instance = SlackgroupsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SlackgroupsSettingsConfig.to_json())

# convert the object into a dict
slackgroups_settings_config_dict = slackgroups_settings_config_instance.to_dict()
# create an instance of SlackgroupsSettingsConfig from a dict
slackgroups_settings_config_from_dict = SlackgroupsSettingsConfig.from_dict(slackgroups_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


