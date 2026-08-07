# ModelsAlertStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clearing_started_at** | **int** | When clearing began | [optional] 
**resolved_at** | **int** | Unix timestamp when resolved | [optional] 
**state** | [**ModelsAlertState**](ModelsAlertState.md) |  | [optional] 

## Example

```python
from monad.models.models_alert_status import ModelsAlertStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsAlertStatus from a JSON string
models_alert_status_instance = ModelsAlertStatus.from_json(json)
# print the JSON string representation of the object
print(ModelsAlertStatus.to_json())

# convert the object into a dict
models_alert_status_dict = models_alert_status_instance.to_dict()
# create an instance of ModelsAlertStatus from a dict
models_alert_status_from_dict = ModelsAlertStatus.from_dict(models_alert_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


