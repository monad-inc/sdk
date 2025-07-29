# SnykProjectsSettingsConfig

Snyk projects settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron string for scheduling the ingest of your input. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.snyk_projects_settings_config import SnykProjectsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnykProjectsSettingsConfig from a JSON string
snyk_projects_settings_config_instance = SnykProjectsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SnykProjectsSettingsConfig.to_json())

# convert the object into a dict
snyk_projects_settings_config_dict = snyk_projects_settings_config_instance.to_dict()
# create an instance of SnykProjectsSettingsConfig from a dict
snyk_projects_settings_config_from_dict = SnykProjectsSettingsConfig.from_dict(snyk_projects_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


