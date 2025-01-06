# AwsS3SettingsConfig

AWS S3 settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Name of the S3 bucket. | [optional] 
**compression** | **str** | Compression format of the S3 objects. | [optional] 
**format** | **str** | File format of the S3 objects. | [optional] 
**partition_format** | **str** | Role ARN to assume when reading from S3. | [optional] 
**prefix** | **str** | Prefix of the S3 object keys to read. | [optional] 
**record_location** | **str** | Specifies the partition format of your S3 bucket. Select the option that matches how your data is currently organized in S3. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization. | [optional] 
**region** | **str** | AWS Region of your bucket. | [optional] 
**role_arn** | **str** | Location of the record in the JSON object. This can be ignored if the record is not in JSON format. | [optional] 

## Example

```python
from monad.models.aws_s3_settings_config import AwsS3SettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AwsS3SettingsConfig from a JSON string
aws_s3_settings_config_instance = AwsS3SettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AwsS3SettingsConfig.to_json())

# convert the object into a dict
aws_s3_settings_config_dict = aws_s3_settings_config_instance.to_dict()
# create an instance of AwsS3SettingsConfig from a dict
aws_s3_settings_config_from_dict = AwsS3SettingsConfig.from_dict(aws_s3_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


