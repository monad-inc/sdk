# AwsGuarddutySettingsConfig

AWS Guardduty settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **str** | The AWS region where GuardDuty is enabled. | [optional] 
**role_arn** | **str** | The ARN of the IAM role to assume for accessing GuardDuty. | [optional] 
**severity** | **str** | Filter findings by severity levels. | [optional] 

## Example

```python
from monad.models.aws_guardduty_settings_config import AwsGuarddutySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AwsGuarddutySettingsConfig from a JSON string
aws_guardduty_settings_config_instance = AwsGuarddutySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AwsGuarddutySettingsConfig.to_json())

# convert the object into a dict
aws_guardduty_settings_config_dict = aws_guardduty_settings_config_instance.to_dict()
# create an instance of AwsGuarddutySettingsConfig from a dict
aws_guardduty_settings_config_from_dict = AwsGuarddutySettingsConfig.from_dict(aws_guardduty_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


