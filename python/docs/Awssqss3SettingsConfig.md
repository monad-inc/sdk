# Awssqss3SettingsConfig

AWS SQS S3 settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compression** | **str** | Compression format of the S3 objects. | [optional] 
**format** | **str** | File format of the S3 objects. | [optional] 
**queue_url** | **str** | The URL of the SQS queue to poll for messages. | [optional] 
**record_location** | **str** | Location of the record in the JSON object. This can be ignored if the record is not in JSON format. | [optional] 
**region** | **str** | The AWS region where the SQS queue is located. | [optional] 
**role_arn** | **str** | The ARN of the IAM role to assume for accessing the SQS queue. | [optional] 
**with_metadata** | **bool** | Whether to include S3 object metadata in the output. | [optional] 

## Example

```python
from monad.models.awssqss3_settings_config import Awssqss3SettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of Awssqss3SettingsConfig from a JSON string
awssqss3_settings_config_instance = Awssqss3SettingsConfig.from_json(json)
# print the JSON string representation of the object
print(Awssqss3SettingsConfig.to_json())

# convert the object into a dict
awssqss3_settings_config_dict = awssqss3_settings_config_instance.to_dict()
# create an instance of Awssqss3SettingsConfig from a dict
awssqss3_settings_config_from_dict = Awssqss3SettingsConfig.from_dict(awssqss3_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


