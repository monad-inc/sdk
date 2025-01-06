# ActorsInfoSettingsConfig

CrowdStrike EDR actors info settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor_type** | **str** | Type of actor. Ex: &#39;APT&#39;, &#39;eCrime&#39;, &#39;Hacktivist&#39;, &#39;Insider Threat&#39;, &#39;Nation-State&#39;, &#39;Unknown&#39;, &#39;Other&#39;, etc. Select &#39;None&#39; for no preference. | [optional] 
**cloud_type** | **str** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**cron** | **str** | Cron string for scheduling the ingest of your input | [optional] 
**sort** | **str** | Order fields in ascending or descending order. Ex: &#39;created_date|asc&#39;, &#39;created_date|desc&#39;. | [optional] 
**target_industries** | **str** | Industries targeted by the actor. Ex: &#39;Financial&#39;, &#39;Healthcare&#39;, &#39;Energy&#39;, &#39;Government&#39;, &#39;Manufacturing&#39;, &#39;Technology&#39;, etc. Select &#39;None&#39; for no preference. | [optional] 

## Example

```python
from monad.models.actors_info_settings_config import ActorsInfoSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ActorsInfoSettingsConfig from a JSON string
actors_info_settings_config_instance = ActorsInfoSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ActorsInfoSettingsConfig.to_json())

# convert the object into a dict
actors_info_settings_config_dict = actors_info_settings_config_instance.to_dict()
# create an instance of ActorsInfoSettingsConfig from a dict
actors_info_settings_config_from_dict = ActorsInfoSettingsConfig.from_dict(actors_info_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


