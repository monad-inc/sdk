# ModelsStorageTypeCostSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_org_cost_post_filter** | **float** |  | [optional] 
**total_org_cost_pre_filter** | **float** |  | [optional] 
**total_org_ingest_bytes** | **int** |  | [optional] 
**total_org_ingest_gb** | **float** |  | [optional] 
**total_org_output_storage_bytes** | **int** |  | [optional] 
**total_org_output_storage_gb** | **float** |  | [optional] 

## Example

```python
from monad.models.models_storage_type_cost_summary import ModelsStorageTypeCostSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsStorageTypeCostSummary from a JSON string
models_storage_type_cost_summary_instance = ModelsStorageTypeCostSummary.from_json(json)
# print the JSON string representation of the object
print(ModelsStorageTypeCostSummary.to_json())

# convert the object into a dict
models_storage_type_cost_summary_dict = models_storage_type_cost_summary_instance.to_dict()
# create an instance of ModelsStorageTypeCostSummary from a dict
models_storage_type_cost_summary_from_dict = ModelsStorageTypeCostSummary.from_dict(models_storage_type_cost_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


