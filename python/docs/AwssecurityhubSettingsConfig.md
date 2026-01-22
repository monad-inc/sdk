# AwssecurityhubSettingsConfig

Aws Security Hub Findings settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**queue_url** | **str** | QueueUrl is the URL of the SQS queue to be used for AWS Security Hub integration. | [optional] 
**region** | **str** | Region is the AWS region where the SQS queue and Security Hub are located. | [optional] 
**role_arn** | **str** | RoleArn is the ARN of the IAM role to assume for accessing AWS Queue. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.awssecurityhub_settings_config import AwssecurityhubSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AwssecurityhubSettingsConfig from a JSON string
awssecurityhub_settings_config_instance = AwssecurityhubSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AwssecurityhubSettingsConfig.to_json())

# convert the object into a dict
awssecurityhub_settings_config_dict = awssecurityhub_settings_config_instance.to_dict()
# create an instance of AwssecurityhubSettingsConfig from a dict
awssecurityhub_settings_config_from_dict = AwssecurityhubSettingsConfig.from_dict(awssecurityhub_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


