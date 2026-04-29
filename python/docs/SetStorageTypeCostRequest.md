# SetStorageTypeCostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**costs** | [**Dict[str, RoutesV2SetStorageTypeCostEntry]**](RoutesV2SetStorageTypeCostEntry.md) |  | [optional] 

## Example

```python
from monad.models.set_storage_type_cost_request import SetStorageTypeCostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetStorageTypeCostRequest from a JSON string
set_storage_type_cost_request_instance = SetStorageTypeCostRequest.from_json(json)
# print the JSON string representation of the object
print(SetStorageTypeCostRequest.to_json())

# convert the object into a dict
set_storage_type_cost_request_dict = set_storage_type_cost_request_instance.to_dict()
# create an instance of SetStorageTypeCostRequest from a dict
set_storage_type_cost_request_from_dict = SetStorageTypeCostRequest.from_dict(set_storage_type_cost_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


