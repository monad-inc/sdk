# ModelsStorageTypeTimeSeriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_at** | **str** |  | [optional] 
**metric** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**organization_name** | **str** |  | [optional] 
**resolution** | **str** |  | [optional] 
**start_at** | **str** |  | [optional] 
**storage_types** | [**List[ModelsStorageTypeTimeSeries]**](ModelsStorageTypeTimeSeries.md) |  | [optional] 

## Example

```python
from monad.models.models_storage_type_time_series_response import ModelsStorageTypeTimeSeriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsStorageTypeTimeSeriesResponse from a JSON string
models_storage_type_time_series_response_instance = ModelsStorageTypeTimeSeriesResponse.from_json(json)
# print the JSON string representation of the object
print(ModelsStorageTypeTimeSeriesResponse.to_json())

# convert the object into a dict
models_storage_type_time_series_response_dict = models_storage_type_time_series_response_instance.to_dict()
# create an instance of ModelsStorageTypeTimeSeriesResponse from a dict
models_storage_type_time_series_response_from_dict = ModelsStorageTypeTimeSeriesResponse.from_dict(models_storage_type_time_series_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


