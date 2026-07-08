# AwsS3SettingsConfig

AWS S3 settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of data upto now would be performed on the first sync. All syncs thereafter will be incremental. | [optional] 
**bucket** | **str** | Name of the S3 bucket. | 
**compression** | **str** | Compression format of the S3 objects. | 
**format** | **str** | File format of the S3 objects. | 
**key_filter** | [**SqsS3BaseKeyFilter**](SqsS3BaseKeyFilter.md) |  | [optional] 
**partition_format** | **str** | Partition format of your S3 bucket. Options: hive compliant (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;), flat hive compliant (&#39;dt&#x3D;2024-01-01&#39;), or simple date (&#39;2024/01/01&#39;). | 
**prefix** | **str** | Prefix of the S3 object keys to read. | [optional] 
**record_location** | **str** | Location of the record in the JSON object. This can be ignored if the record is not in JSON format. Leave empty if you want the entire record. | [optional] 
**region** | **str** | AWS Region of your bucket. | [optional] 
**role_arn** | **str** | Role ARN to assume when reading from S3. | [optional] 
**var_schema** | **List[str]** | Ordered list of column names for headerless delimited files (e.g. PSV). Applies to the \&quot;delimited\&quot; format only; the \&quot;csv\&quot; and \&quot;wsv\&quot; formats always read column names from the first row and ignore this field. | 

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


