# SecretsmanagerSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**filters** | [**List[GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter]**](GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter.md) | Filters for returned secrets | [optional] 
**include_planned_deletion** | **bool** | Whether or not to include secrets scheduled for deletion | [optional] 
**region** | **str** | URL of the organization | [optional] 
**role_arn** | **str** | The ID of the secret to describe | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.secretsmanager_settings_config import SecretsmanagerSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SecretsmanagerSettingsConfig from a JSON string
secretsmanager_settings_config_instance = SecretsmanagerSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SecretsmanagerSettingsConfig.to_json())

# convert the object into a dict
secretsmanager_settings_config_dict = secretsmanager_settings_config_instance.to_dict()
# create an instance of SecretsmanagerSettingsConfig from a dict
secretsmanager_settings_config_from_dict = SecretsmanagerSettingsConfig.from_dict(secretsmanager_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


