# RoutesV2StorageTypeOutputDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseline_method** | **str** |  | [optional] 
**cost_per_gb** | **float** |  | [optional] 
**egress_bytes** | **int** |  | [optional] 
**egress_gb** | **float** |  | [optional] 
**has_own_price** | **bool** |  | [optional] 
**ingress_bytes** | **int** |  | [optional] 
**ingress_gb** | **float** |  | [optional] 
**input_id** | **str** |  | [optional] 
**node_id** | **str** |  | [optional] 
**output_deleted** | **bool** |  | [optional] 
**output_id** | **str** |  | [optional] 
**output_name** | **str** |  | [optional] 
**pipeline_id** | **str** |  | [optional] 
**storage_type** | **str** |  | [optional] 
**total_cost** | **float** |  | [optional] 

## Example

```python
from monad.models.routes_v2_storage_type_output_detail_response import RoutesV2StorageTypeOutputDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2StorageTypeOutputDetailResponse from a JSON string
routes_v2_storage_type_output_detail_response_instance = RoutesV2StorageTypeOutputDetailResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV2StorageTypeOutputDetailResponse.to_json())

# convert the object into a dict
routes_v2_storage_type_output_detail_response_dict = routes_v2_storage_type_output_detail_response_instance.to_dict()
# create an instance of RoutesV2StorageTypeOutputDetailResponse from a dict
routes_v2_storage_type_output_detail_response_from_dict = RoutesV2StorageTypeOutputDetailResponse.from_dict(routes_v2_storage_type_output_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


