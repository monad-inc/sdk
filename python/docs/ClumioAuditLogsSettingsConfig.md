# ClumioAuditLogsSettingsConfig

Clumio Audit Trails settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **str** | The region associated with your Clumio account | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.clumio_audit_logs_settings_config import ClumioAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ClumioAuditLogsSettingsConfig from a JSON string
clumio_audit_logs_settings_config_instance = ClumioAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ClumioAuditLogsSettingsConfig.to_json())

# convert the object into a dict
clumio_audit_logs_settings_config_dict = clumio_audit_logs_settings_config_instance.to_dict()
# create an instance of ClumioAuditLogsSettingsConfig from a dict
clumio_audit_logs_settings_config_from_dict = ClumioAuditLogsSettingsConfig.from_dict(clumio_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


