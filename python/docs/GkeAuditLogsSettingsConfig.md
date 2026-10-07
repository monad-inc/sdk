# GkeAuditLogsSettingsConfig

GKE Audit Logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_name** | **str** | The name of the GKE cluster. | 
**location** | **str** | The GCP location (region or zone) where the GKE cluster runs, e.g. us-central1. | 
**project_id** | **str** | The GCP project ID that contains the GKE cluster. | 

## Example

```python
from monad.models.gke_audit_logs_settings_config import GkeAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GkeAuditLogsSettingsConfig from a JSON string
gke_audit_logs_settings_config_instance = GkeAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(GkeAuditLogsSettingsConfig.to_json())

# convert the object into a dict
gke_audit_logs_settings_config_dict = gke_audit_logs_settings_config_instance.to_dict()
# create an instance of GkeAuditLogsSettingsConfig from a dict
gke_audit_logs_settings_config_from_dict = GkeAuditLogsSettingsConfig.from_dict(gke_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


