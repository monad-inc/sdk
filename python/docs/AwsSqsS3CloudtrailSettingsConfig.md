# AwsSqsS3CloudtrailSettingsConfig

AWS SQS S3 CloudTrail settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunking_mode** | [**AwsSqsS3CloudtrailChunkingMode**](AwsSqsS3CloudtrailChunkingMode.md) |  | [optional] 
**exclude_digest_files** | **bool** | ExcludeDigestFiles skips keys containing \&quot;/CloudTrail-Digest/\&quot; (hash signatures, not events). | [optional] 
**queue_url** | **str** |  | 
**region** | **str** |  | 
**role_arn** | **str** |  | [optional] 
**uses_sns** | **bool** |  | [optional] 
**with_metadata** | **bool** |  | [optional] 

## Example

```python
from monad.models.aws_sqs_s3_cloudtrail_settings_config import AwsSqsS3CloudtrailSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AwsSqsS3CloudtrailSettingsConfig from a JSON string
aws_sqs_s3_cloudtrail_settings_config_instance = AwsSqsS3CloudtrailSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AwsSqsS3CloudtrailSettingsConfig.to_json())

# convert the object into a dict
aws_sqs_s3_cloudtrail_settings_config_dict = aws_sqs_s3_cloudtrail_settings_config_instance.to_dict()
# create an instance of AwsSqsS3CloudtrailSettingsConfig from a dict
aws_sqs_s3_cloudtrail_settings_config_from_dict = AwsSqsS3CloudtrailSettingsConfig.from_dict(aws_sqs_s3_cloudtrail_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


