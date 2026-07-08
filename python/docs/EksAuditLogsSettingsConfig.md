# EksAuditLogsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** |  | [optional] 
**cluster_name** | **str** |  | [optional] 
**region** | **str** |  | [optional] 
**role_arn** | **str** |  | [optional] 
**use_synthetic_data** | **bool** |  | [optional] 
**uses_static_creds** | **bool** |  | [optional] 

## Example

```python
from monad.models.eks_audit_logs_settings_config import EksAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EksAuditLogsSettingsConfig from a JSON string
eks_audit_logs_settings_config_instance = EksAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(EksAuditLogsSettingsConfig.to_json())

# convert the object into a dict
eks_audit_logs_settings_config_dict = eks_audit_logs_settings_config_instance.to_dict()
# create an instance of EksAuditLogsSettingsConfig from a dict
eks_audit_logs_settings_config_from_dict = EksAuditLogsSettingsConfig.from_dict(eks_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


