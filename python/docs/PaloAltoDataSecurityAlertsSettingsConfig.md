# PaloAltoDataSecurityAlertsSettingsConfig

Palo Alto Data Security Alerts settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **str** | URL of the organization | [optional] 

## Example

```python
from monad.models.palo_alto_data_security_alerts_settings_config import PaloAltoDataSecurityAlertsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PaloAltoDataSecurityAlertsSettingsConfig from a JSON string
palo_alto_data_security_alerts_settings_config_instance = PaloAltoDataSecurityAlertsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(PaloAltoDataSecurityAlertsSettingsConfig.to_json())

# convert the object into a dict
palo_alto_data_security_alerts_settings_config_dict = palo_alto_data_security_alerts_settings_config_instance.to_dict()
# create an instance of PaloAltoDataSecurityAlertsSettingsConfig from a dict
palo_alto_data_security_alerts_settings_config_from_dict = PaloAltoDataSecurityAlertsSettingsConfig.from_dict(palo_alto_data_security_alerts_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


