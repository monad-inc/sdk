# RoutesV3Summary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_size_change_percent** | **int** |  | [optional] 
**fields_to_update** | **int** |  | [optional] 
**total_fields** | **int** |  | [optional] 

## Example

```python
from monad.models.routes_v3_summary import RoutesV3Summary

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3Summary from a JSON string
routes_v3_summary_instance = RoutesV3Summary.from_json(json)
# print the JSON string representation of the object
print(RoutesV3Summary.to_json())

# convert the object into a dict
routes_v3_summary_dict = routes_v3_summary_instance.to_dict()
# create an instance of RoutesV3Summary from a dict
routes_v3_summary_from_dict = RoutesV3Summary.from_dict(routes_v3_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


