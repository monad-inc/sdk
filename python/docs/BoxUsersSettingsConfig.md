# BoxUsersSettingsConfig

Box Users settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron string for scheduling the ingest of your input | [optional] 
**filter_term** | **str** | Limits the results to only users who&#39;s name or login start with the search term. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.box_users_settings_config import BoxUsersSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BoxUsersSettingsConfig from a JSON string
box_users_settings_config_instance = BoxUsersSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(BoxUsersSettingsConfig.to_json())

# convert the object into a dict
box_users_settings_config_dict = box_users_settings_config_instance.to_dict()
# create an instance of BoxUsersSettingsConfig from a dict
box_users_settings_config_from_dict = BoxUsersSettingsConfig.from_dict(box_users_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


