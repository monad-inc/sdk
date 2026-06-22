# AlertsAlertMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**AlertsAlertCategory**](AlertsAlertCategory.md) |  | [optional] 
**config** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**granularity** | [**AlertsAlertGranularity**](AlertsAlertGranularity.md) |  | [optional] 
**house** | [**AlertsAlertHouse**](AlertsAlertHouse.md) |  | [optional] 
**internal** | **bool** |  | [optional] 
**managed_by** | [**ModelsManagedBy**](ModelsManagedBy.md) |  | [optional] 
**name** | **str** |  | [optional] 
**tier** | **int** |  | [optional] 
**type_id** | **str** |  | [optional] 

## Example

```python
from monad.models.alerts_alert_meta import AlertsAlertMeta

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsAlertMeta from a JSON string
alerts_alert_meta_instance = AlertsAlertMeta.from_json(json)
# print the JSON string representation of the object
print(AlertsAlertMeta.to_json())

# convert the object into a dict
alerts_alert_meta_dict = alerts_alert_meta_instance.to_dict()
# create an instance of AlertsAlertMeta from a dict
alerts_alert_meta_from_dict = AlertsAlertMeta.from_dict(alerts_alert_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


