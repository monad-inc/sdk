# OrganizationsSettingsConfig


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
from monad.models.organizations_settings_config import OrganizationsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsSettingsConfig from a JSON string
organizations_settings_config_instance = OrganizationsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(OrganizationsSettingsConfig.to_json())

# convert the object into a dict
organizations_settings_config_dict = organizations_settings_config_instance.to_dict()
# create an instance of OrganizationsSettingsConfig from a dict
organizations_settings_config_from_dict = OrganizationsSettingsConfig.from_dict(organizations_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


