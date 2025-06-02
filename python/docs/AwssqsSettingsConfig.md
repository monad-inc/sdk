# AwssqsSettingsConfig

AWS SQS settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queue_url** | **str** | The URL of the SQS queue to poll for messages. | [optional] 
**region** | **str** | The AWS region where the SQS queue is located. | [optional] 
**role_arn** | **str** | The ARN of the IAM role to assume for accessing the SQS queue. | [optional] 

## Example

```python
from monad.models.awssqs_settings_config import AwssqsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AwssqsSettingsConfig from a JSON string
awssqs_settings_config_instance = AwssqsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AwssqsSettingsConfig.to_json())

# convert the object into a dict
awssqs_settings_config_dict = awssqs_settings_config_instance.to_dict()
# create an instance of AwssqsSettingsConfig from a dict
awssqs_settings_config_from_dict = AwssqsSettingsConfig.from_dict(awssqs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


