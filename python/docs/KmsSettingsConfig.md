# KmsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**kms_type** | **str** | Type of KMS resources to list | [optional] 
**region** | **str** | AWS region to use | [optional] 
**role_arn** | **str** | Role ARN to assume | [optional] 

## Example

```python
from monad.models.kms_settings_config import KmsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KmsSettingsConfig from a JSON string
kms_settings_config_instance = KmsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(KmsSettingsConfig.to_json())

# convert the object into a dict
kms_settings_config_dict = kms_settings_config_instance.to_dict()
# create an instance of KmsSettingsConfig from a dict
kms_settings_config_from_dict = KmsSettingsConfig.from_dict(kms_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


