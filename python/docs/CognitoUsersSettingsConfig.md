# CognitoUsersSettingsConfig

AWS Cognito Users settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron string for scheduling the ingest of your input. eg: &#x60;0 0 * * *&#x60; - Daily at midnight, or &#x60;*/15 * * * *&#x60; - Every 15 minutes | [optional] 
**filter** | [**CognitoUsersFilter**](CognitoUsersFilter.md) |  | [optional] 
**region** | **str** | The Region that you would receieve findings for | [optional] 
**role_arn** | **str** | The ARN of the role to assume to access the bucket | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**user_pool_id** | **str** | User Pool ID to extract users from | [optional] 

## Example

```python
from monad.models.cognito_users_settings_config import CognitoUsersSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CognitoUsersSettingsConfig from a JSON string
cognito_users_settings_config_instance = CognitoUsersSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CognitoUsersSettingsConfig.to_json())

# convert the object into a dict
cognito_users_settings_config_dict = cognito_users_settings_config_instance.to_dict()
# create an instance of CognitoUsersSettingsConfig from a dict
cognito_users_settings_config_from_dict = CognitoUsersSettingsConfig.from_dict(cognito_users_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


