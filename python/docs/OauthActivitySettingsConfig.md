# OauthActivitySettingsConfig

Google Workspace OAuth Activity settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** | Authentication type (service_account or oauth) | [optional] 
**email** | **str** | Email address to use for authenticating with Google Cloud (required for service_account auth). | [optional] 

## Example

```python
from monad.models.oauth_activity_settings_config import OauthActivitySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OauthActivitySettingsConfig from a JSON string
oauth_activity_settings_config_instance = OauthActivitySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(OauthActivitySettingsConfig.to_json())

# convert the object into a dict
oauth_activity_settings_config_dict = oauth_activity_settings_config_instance.to_dict()
# create an instance of OauthActivitySettingsConfig from a dict
oauth_activity_settings_config_from_dict = OauthActivitySettingsConfig.from_dict(oauth_activity_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


