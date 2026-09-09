# RoutesV2SetOutputCostEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_per_gb** | **float** |  | [optional] 
**output_id** | **str** |  | [optional] 
**storage_type** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_set_output_cost_entry import RoutesV2SetOutputCostEntry

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2SetOutputCostEntry from a JSON string
routes_v2_set_output_cost_entry_instance = RoutesV2SetOutputCostEntry.from_json(json)
# print the JSON string representation of the object
print(RoutesV2SetOutputCostEntry.to_json())

# convert the object into a dict
routes_v2_set_output_cost_entry_dict = routes_v2_set_output_cost_entry_instance.to_dict()
# create an instance of RoutesV2SetOutputCostEntry from a dict
routes_v2_set_output_cost_entry_from_dict = RoutesV2SetOutputCostEntry.from_dict(routes_v2_set_output_cost_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


