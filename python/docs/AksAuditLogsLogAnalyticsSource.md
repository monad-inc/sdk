# AksAuditLogsLogAnalyticsSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingestion_delay** | **int** |  | [optional] 
**workspace_id** | **str** |  | 

## Example

```python
from monad.models.aks_audit_logs_log_analytics_source import AksAuditLogsLogAnalyticsSource

# TODO update the JSON string below
json = "{}"
# create an instance of AksAuditLogsLogAnalyticsSource from a JSON string
aks_audit_logs_log_analytics_source_instance = AksAuditLogsLogAnalyticsSource.from_json(json)
# print the JSON string representation of the object
print(AksAuditLogsLogAnalyticsSource.to_json())

# convert the object into a dict
aks_audit_logs_log_analytics_source_dict = aks_audit_logs_log_analytics_source_instance.to_dict()
# create an instance of AksAuditLogsLogAnalyticsSource from a dict
aks_audit_logs_log_analytics_source_from_dict = AksAuditLogsLogAnalyticsSource.from_dict(aks_audit_logs_log_analytics_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


