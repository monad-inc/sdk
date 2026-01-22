# ModelsStorageTypeSummaryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_summary** | [**ModelsStorageTypeCostSummary**](ModelsStorageTypeCostSummary.md) |  | [optional] 
**end_at** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**organization_name** | **str** |  | [optional] 
**outputs** | [**Dict[str, ModelsStorageTypeOutputDetail]**](ModelsStorageTypeOutputDetail.md) |  | [optional] 
**start_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_storage_type_summary_response import ModelsStorageTypeSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsStorageTypeSummaryResponse from a JSON string
models_storage_type_summary_response_instance = ModelsStorageTypeSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(ModelsStorageTypeSummaryResponse.to_json())

# convert the object into a dict
models_storage_type_summary_response_dict = models_storage_type_summary_response_instance.to_dict()
# create an instance of ModelsStorageTypeSummaryResponse from a dict
models_storage_type_summary_response_from_dict = ModelsStorageTypeSummaryResponse.from_dict(models_storage_type_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


