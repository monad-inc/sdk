# RoutesV2SetStorageTypeCostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**costs** | [**Dict[str, RoutesV2SetStorageTypeCostEntry]**](RoutesV2SetStorageTypeCostEntry.md) |  | [optional] 

## Example

```python
from monad.models.routes_v2_set_storage_type_cost_request import RoutesV2SetStorageTypeCostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2SetStorageTypeCostRequest from a JSON string
routes_v2_set_storage_type_cost_request_instance = RoutesV2SetStorageTypeCostRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2SetStorageTypeCostRequest.to_json())

# convert the object into a dict
routes_v2_set_storage_type_cost_request_dict = routes_v2_set_storage_type_cost_request_instance.to_dict()
# create an instance of RoutesV2SetStorageTypeCostRequest from a dict
routes_v2_set_storage_type_cost_request_from_dict = RoutesV2SetStorageTypeCostRequest.from_dict(routes_v2_set_storage_type_cost_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


