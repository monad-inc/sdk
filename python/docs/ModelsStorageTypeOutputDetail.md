# ModelsStorageTypeOutputDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_id** | **str** |  | [optional] 
**cost_per_gb** | **float** |  | [optional] 
**egress_bytes** | **int** |  | [optional] 
**egress_bytes_gb** | **float** |  | [optional] 
**num_pipelines** | **int** |  | [optional] 
**pre_filter_bytes** | **int** |  | [optional] 
**pre_filter_bytes_gb** | **float** |  | [optional] 
**total_cost_post_filter** | **float** |  | [optional] 
**total_cost_pre_filter** | **float** |  | [optional] 

## Example

```python
from monad.models.models_storage_type_output_detail import ModelsStorageTypeOutputDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsStorageTypeOutputDetail from a JSON string
models_storage_type_output_detail_instance = ModelsStorageTypeOutputDetail.from_json(json)
# print the JSON string representation of the object
print(ModelsStorageTypeOutputDetail.to_json())

# convert the object into a dict
models_storage_type_output_detail_dict = models_storage_type_output_detail_instance.to_dict()
# create an instance of ModelsStorageTypeOutputDetail from a dict
models_storage_type_output_detail_from_dict = ModelsStorageTypeOutputDetail.from_dict(models_storage_type_output_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


