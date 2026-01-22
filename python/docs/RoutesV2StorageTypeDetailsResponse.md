# RoutesV2StorageTypeDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_at** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**organization_name** | **str** |  | [optional] 
**outputs** | [**List[RoutesV2StorageTypeOutputDetailResponse]**](RoutesV2StorageTypeOutputDetailResponse.md) |  | [optional] 
**start_at** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_storage_type_details_response import RoutesV2StorageTypeDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2StorageTypeDetailsResponse from a JSON string
routes_v2_storage_type_details_response_instance = RoutesV2StorageTypeDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV2StorageTypeDetailsResponse.to_json())

# convert the object into a dict
routes_v2_storage_type_details_response_dict = routes_v2_storage_type_details_response_instance.to_dict()
# create an instance of RoutesV2StorageTypeDetailsResponse from a dict
routes_v2_storage_type_details_response_from_dict = RoutesV2StorageTypeDetailsResponse.from_dict(routes_v2_storage_type_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


