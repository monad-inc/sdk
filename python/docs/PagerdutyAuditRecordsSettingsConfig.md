# PagerdutyAuditRecordsSettingsConfig

Pagerduty Audit Records settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.pagerduty_audit_records_settings_config import PagerdutyAuditRecordsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PagerdutyAuditRecordsSettingsConfig from a JSON string
pagerduty_audit_records_settings_config_instance = PagerdutyAuditRecordsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(PagerdutyAuditRecordsSettingsConfig.to_json())

# convert the object into a dict
pagerduty_audit_records_settings_config_dict = pagerduty_audit_records_settings_config_instance.to_dict()
# create an instance of PagerdutyAuditRecordsSettingsConfig from a dict
pagerduty_audit_records_settings_config_from_dict = PagerdutyAuditRecordsSettingsConfig.from_dict(pagerduty_audit_records_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


