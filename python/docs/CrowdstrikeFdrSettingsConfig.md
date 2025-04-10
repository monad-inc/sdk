# CrowdstrikeFdrSettingsConfig

Crowdstrike Falcon Data Replicator settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_queue_url** | **str** | AWS SQS queue URL provided to you by the CrowdStrike Falcon console | [optional] 
**aws_region_name** | **str** | Name of the region where the queue resides | [optional] 
**aws_s3_url** | **str** | The URL of the S3 bucket | [optional] 
**cron** | **str** | The time in seconds to wait before each check of the queue for more messages | [optional] 
**visibility_timeout** | **int** | Time in seconds before a message is returned back to the SQS queue | [optional] 

## Example

```python
from monad.models.crowdstrike_fdr_settings_config import CrowdstrikeFdrSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CrowdstrikeFdrSettingsConfig from a JSON string
crowdstrike_fdr_settings_config_instance = CrowdstrikeFdrSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CrowdstrikeFdrSettingsConfig.to_json())

# convert the object into a dict
crowdstrike_fdr_settings_config_dict = crowdstrike_fdr_settings_config_instance.to_dict()
# create an instance of CrowdstrikeFdrSettingsConfig from a dict
crowdstrike_fdr_settings_config_from_dict = CrowdstrikeFdrSettingsConfig.from_dict(crowdstrike_fdr_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


