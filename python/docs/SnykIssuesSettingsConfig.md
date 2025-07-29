# SnykIssuesSettingsConfig

Snyk issues settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.snyk_issues_settings_config import SnykIssuesSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnykIssuesSettingsConfig from a JSON string
snyk_issues_settings_config_instance = SnykIssuesSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SnykIssuesSettingsConfig.to_json())

# convert the object into a dict
snyk_issues_settings_config_dict = snyk_issues_settings_config_instance.to_dict()
# create an instance of SnykIssuesSettingsConfig from a dict
snyk_issues_settings_config_from_dict = SnykIssuesSettingsConfig.from_dict(snyk_issues_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


