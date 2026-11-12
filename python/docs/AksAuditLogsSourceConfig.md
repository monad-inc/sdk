# AksAuditLogsSourceConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_hubs** | [**AksAuditLogsEventHubsSource**](AksAuditLogsEventHubsSource.md) |  | [optional] 
**log_analytics** | [**AksAuditLogsLogAnalyticsSource**](AksAuditLogsLogAnalyticsSource.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from monad.models.aks_audit_logs_source_config import AksAuditLogsSourceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AksAuditLogsSourceConfig from a JSON string
aks_audit_logs_source_config_instance = AksAuditLogsSourceConfig.from_json(json)
# print the JSON string representation of the object
print(AksAuditLogsSourceConfig.to_json())

# convert the object into a dict
aks_audit_logs_source_config_dict = aks_audit_logs_source_config_instance.to_dict()
# create an instance of AksAuditLogsSourceConfig from a dict
aks_audit_logs_source_config_from_dict = AksAuditLogsSourceConfig.from_dict(aks_audit_logs_source_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


