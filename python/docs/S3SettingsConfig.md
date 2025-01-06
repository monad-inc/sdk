# S3SettingsConfig

S3 Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | The name of the S3 bucket where data will be stored | [optional] 
**compression** | **str** | The compression method to be applied to the data before storing in S3 | [optional] 
**format** | **str** | The format in which data will be stored in S3 (e.g., JSON, CSV) | [optional] 
**partition_format** | **str** | Specifies the format for organizing data into partitions within your S3 bucket. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). | [optional] 
**prefix** | **str** | An optional prefix for S3 object keys to organize data within the bucket | [optional] 
**region** | **str** | The AWS region where the S3 bucket is located | [optional] 
**role_arn** | **str** | The Amazon Resource Name (ARN) of the IAM role to assume which grants access to the S3 bucket | [optional] 

## Example

```python
from monad.models.s3_settings_config import S3SettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of S3SettingsConfig from a JSON string
s3_settings_config_instance = S3SettingsConfig.from_json(json)
# print the JSON string representation of the object
print(S3SettingsConfig.to_json())

# convert the object into a dict
s3_settings_config_dict = s3_settings_config_instance.to_dict()
# create an instance of S3SettingsConfig from a dict
s3_settings_config_from_dict = S3SettingsConfig.from_dict(s3_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


