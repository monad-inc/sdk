# RoutesV3AlertList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | [**List[GithubComMonadIncAlertsModelsAlert]**](GithubComMonadIncAlertsModelsAlert.md) |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from monad.models.routes_v3_alert_list import RoutesV3AlertList

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3AlertList from a JSON string
routes_v3_alert_list_instance = RoutesV3AlertList.from_json(json)
# print the JSON string representation of the object
print(RoutesV3AlertList.to_json())

# convert the object into a dict
routes_v3_alert_list_dict = routes_v3_alert_list_instance.to_dict()
# create an instance of RoutesV3AlertList from a dict
routes_v3_alert_list_from_dict = RoutesV3AlertList.from_dict(routes_v3_alert_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


