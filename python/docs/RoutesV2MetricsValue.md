# RoutesV2MetricsValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **int** |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from monad.models.routes_v2_metrics_value import RoutesV2MetricsValue

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2MetricsValue from a JSON string
routes_v2_metrics_value_instance = RoutesV2MetricsValue.from_json(json)
# print the JSON string representation of the object
print(RoutesV2MetricsValue.to_json())

# convert the object into a dict
routes_v2_metrics_value_dict = routes_v2_metrics_value_instance.to_dict()
# create an instance of RoutesV2MetricsValue from a dict
routes_v2_metrics_value_from_dict = RoutesV2MetricsValue.from_dict(routes_v2_metrics_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


