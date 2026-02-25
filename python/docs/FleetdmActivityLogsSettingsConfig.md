# FleetdmActivityLogsSettingsConfig

Fleet DM settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fleet_url** | **str** | URL of the Fleet DM instance | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.fleetdm_activity_logs_settings_config import FleetdmActivityLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FleetdmActivityLogsSettingsConfig from a JSON string
fleetdm_activity_logs_settings_config_instance = FleetdmActivityLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(FleetdmActivityLogsSettingsConfig.to_json())

# convert the object into a dict
fleetdm_activity_logs_settings_config_dict = fleetdm_activity_logs_settings_config_instance.to_dict()
# create an instance of FleetdmActivityLogsSettingsConfig from a dict
fleetdm_activity_logs_settings_config_from_dict = FleetdmActivityLogsSettingsConfig.from_dict(fleetdm_activity_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


