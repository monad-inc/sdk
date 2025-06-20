# SecurityGroupsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron string for scheduling the ingest of your input | [optional] 
**filters** | [**List[SecurityGroupsFilterConfig]**](SecurityGroupsFilterConfig.md) | Filters for the security groups | [optional] 
**region** | **str** | The AWS region where the security groups that are being fetched are located. | [optional] 
**role_arn** | **str** | RoleArn is the ARN of the IAM role to assume for accessing AWS security groups. | [optional] 

## Example

```python
from monad.models.security_groups_settings_config import SecurityGroupsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityGroupsSettingsConfig from a JSON string
security_groups_settings_config_instance = SecurityGroupsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SecurityGroupsSettingsConfig.to_json())

# convert the object into a dict
security_groups_settings_config_dict = security_groups_settings_config_instance.to_dict()
# create an instance of SecurityGroupsSettingsConfig from a dict
security_groups_settings_config_from_dict = SecurityGroupsSettingsConfig.from_dict(security_groups_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


