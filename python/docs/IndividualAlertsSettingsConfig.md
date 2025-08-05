# IndividualAlertsSettingsConfig

Clumio Alerts settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_type** | **str** | Filter by alert type (e.g., policy_violated, tag_conflict) | [optional] 
**embed** | **str** | Embed related resources in the data returned (e.g., read-consolidated-alert) | [optional] 
**primary_entity_type** | **str** | Filter by primary entity type (e.g., aws_ebs_volume, vmware_vm) | [optional] 
**primary_entity_value** | **str** | Filter by primary entity value (contains search) | [optional] 
**region** | **str** | The region associated with your Clumio account | [optional] 
**severity** | **str** | Filter by alert severity (error, warning) | [optional] 
**status** | **str** | Filter by alert status (active, cleared) | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.individual_alerts_settings_config import IndividualAlertsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualAlertsSettingsConfig from a JSON string
individual_alerts_settings_config_instance = IndividualAlertsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(IndividualAlertsSettingsConfig.to_json())

# convert the object into a dict
individual_alerts_settings_config_dict = individual_alerts_settings_config_instance.to_dict()
# create an instance of IndividualAlertsSettingsConfig from a dict
individual_alerts_settings_config_from_dict = IndividualAlertsSettingsConfig.from_dict(individual_alerts_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


