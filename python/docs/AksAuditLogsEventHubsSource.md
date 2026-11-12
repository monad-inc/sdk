# AksAuditLogsEventHubsSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_group** | **str** |  | 
**event_hub_name** | **str** |  | 
**namespace** | **str** |  | 

## Example

```python
from monad.models.aks_audit_logs_event_hubs_source import AksAuditLogsEventHubsSource

# TODO update the JSON string below
json = "{}"
# create an instance of AksAuditLogsEventHubsSource from a JSON string
aks_audit_logs_event_hubs_source_instance = AksAuditLogsEventHubsSource.from_json(json)
# print the JSON string representation of the object
print(AksAuditLogsEventHubsSource.to_json())

# convert the object into a dict
aks_audit_logs_event_hubs_source_dict = aks_audit_logs_event_hubs_source_instance.to_dict()
# create an instance of AksAuditLogsEventHubsSource from a dict
aks_audit_logs_event_hubs_source_from_dict = AksAuditLogsEventHubsSource.from_dict(aks_audit_logs_event_hubs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


