# GithubAdvisoryUserSettingsConfig

Github Advisory Database settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.github_advisory_user_settings_config import GithubAdvisoryUserSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GithubAdvisoryUserSettingsConfig from a JSON string
github_advisory_user_settings_config_instance = GithubAdvisoryUserSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(GithubAdvisoryUserSettingsConfig.to_json())

# convert the object into a dict
github_advisory_user_settings_config_dict = github_advisory_user_settings_config_instance.to_dict()
# create an instance of GithubAdvisoryUserSettingsConfig from a dict
github_advisory_user_settings_config_from_dict = GithubAdvisoryUserSettingsConfig.from_dict(github_advisory_user_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


