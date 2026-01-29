# AwsOrganizationsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_type** | **str** | Specifies whether to list AWS accounts or organizational units (OUs) as children of the parent entity. | [optional] 
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**parent_id** | **str** | Parent ID to list children for | [optional] 
**region** | **str** | AWS region to use | [optional] 
**role_arn** | **str** | Role ARN to assume | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.aws_organizations_settings_config import AwsOrganizationsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AwsOrganizationsSettingsConfig from a JSON string
aws_organizations_settings_config_instance = AwsOrganizationsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AwsOrganizationsSettingsConfig.to_json())

# convert the object into a dict
aws_organizations_settings_config_dict = aws_organizations_settings_config_instance.to_dict()
# create an instance of AwsOrganizationsSettingsConfig from a dict
aws_organizations_settings_config_from_dict = AwsOrganizationsSettingsConfig.from_dict(aws_organizations_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


