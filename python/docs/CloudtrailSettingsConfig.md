# CloudtrailSettingsConfig

AWS Cloudtrail settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | The name of the S3 bucket | [optional] 
**prefix** | **str** | Prefix of the S3 object keys to read. | [optional] 
**region** | **str** | The region of the S3 bucket | [optional] 
**role_arn** | **str** | The ARN of the role to assume to access the bucket | [optional] 

## Example

```python
from monad.models.cloudtrail_settings_config import CloudtrailSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudtrailSettingsConfig from a JSON string
cloudtrail_settings_config_instance = CloudtrailSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudtrailSettingsConfig.to_json())

# convert the object into a dict
cloudtrail_settings_config_dict = cloudtrail_settings_config_instance.to_dict()
# create an instance of CloudtrailSettingsConfig from a dict
cloudtrail_settings_config_from_dict = CloudtrailSettingsConfig.from_dict(cloudtrail_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


