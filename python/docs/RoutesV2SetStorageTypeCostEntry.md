# RoutesV2SetStorageTypeCostEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_per_byte** | **float** |  | [optional] 
**cost_per_gb** | **float** |  | [optional] 

## Example

```python
from monad.models.routes_v2_set_storage_type_cost_entry import RoutesV2SetStorageTypeCostEntry

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2SetStorageTypeCostEntry from a JSON string
routes_v2_set_storage_type_cost_entry_instance = RoutesV2SetStorageTypeCostEntry.from_json(json)
# print the JSON string representation of the object
print(RoutesV2SetStorageTypeCostEntry.to_json())

# convert the object into a dict
routes_v2_set_storage_type_cost_entry_dict = routes_v2_set_storage_type_cost_entry_instance.to_dict()
# create an instance of RoutesV2SetStorageTypeCostEntry from a dict
routes_v2_set_storage_type_cost_entry_from_dict = RoutesV2SetStorageTypeCostEntry.from_dict(routes_v2_set_storage_type_cost_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


