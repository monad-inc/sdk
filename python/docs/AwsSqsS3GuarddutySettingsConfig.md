# AwsSqsS3GuarddutySettingsConfig

AWS SQS S3 GuardDuty settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queue_url** | **str** |  | 
**region** | **str** |  | 
**role_arn** | **str** |  | [optional] 
**use_fips** | **bool** |  | [optional] 
**uses_sns** | **bool** |  | [optional] 
**with_metadata** | **bool** |  | [optional] 

## Example

```python
from monad.models.aws_sqs_s3_guardduty_settings_config import AwsSqsS3GuarddutySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AwsSqsS3GuarddutySettingsConfig from a JSON string
aws_sqs_s3_guardduty_settings_config_instance = AwsSqsS3GuarddutySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AwsSqsS3GuarddutySettingsConfig.to_json())

# convert the object into a dict
aws_sqs_s3_guardduty_settings_config_dict = aws_sqs_s3_guardduty_settings_config_instance.to_dict()
# create an instance of AwsSqsS3GuarddutySettingsConfig from a dict
aws_sqs_s3_guardduty_settings_config_from_dict = AwsSqsS3GuarddutySettingsConfig.from_dict(aws_sqs_s3_guardduty_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


