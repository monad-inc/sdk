# CodaAuditEventsSettingsConfig

Coda Audit Events settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**org_id** | **str** | Coda Organization ID. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.coda_audit_events_settings_config import CodaAuditEventsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CodaAuditEventsSettingsConfig from a JSON string
coda_audit_events_settings_config_instance = CodaAuditEventsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CodaAuditEventsSettingsConfig.to_json())

# convert the object into a dict
coda_audit_events_settings_config_dict = coda_audit_events_settings_config_instance.to_dict()
# create an instance of CodaAuditEventsSettingsConfig from a dict
coda_audit_events_settings_config_from_dict = CodaAuditEventsSettingsConfig.from_dict(coda_audit_events_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


