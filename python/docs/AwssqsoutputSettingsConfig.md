# AwssqsoutputSettingsConfig

SQS Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_group_id** | **str** | The message group ID for FIFO queues. This is required for FIFO queues. | [optional] 
**queue_type** | **str** | The type of SQS queue to use. Can be either \&quot;standard\&quot; or \&quot;fifo\&quot;. | [optional] 
**queue_url** | **str** | The URL of the SQS queue to poll for messages. | [optional] 
**region** | **str** | The AWS region where the SQS queue is located. | [optional] 
**role_arn** | **str** | The ARN of the IAM role to assume for accessing the SQS queue. | [optional] 

## Example

```python
from monad.models.awssqsoutput_settings_config import AwssqsoutputSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AwssqsoutputSettingsConfig from a JSON string
awssqsoutput_settings_config_instance = AwssqsoutputSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AwssqsoutputSettingsConfig.to_json())

# convert the object into a dict
awssqsoutput_settings_config_dict = awssqsoutput_settings_config_instance.to_dict()
# create an instance of AwssqsoutputSettingsConfig from a dict
awssqsoutput_settings_config_from_dict = AwssqsoutputSettingsConfig.from_dict(awssqsoutput_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


