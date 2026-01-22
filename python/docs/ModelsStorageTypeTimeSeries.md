# ModelsStorageTypeTimeSeries


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_type** | **str** |  | [optional] 
**values** | [**List[ModelsPipelineMetricsValue]**](ModelsPipelineMetricsValue.md) |  | [optional] 

## Example

```python
from monad.models.models_storage_type_time_series import ModelsStorageTypeTimeSeries

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsStorageTypeTimeSeries from a JSON string
models_storage_type_time_series_instance = ModelsStorageTypeTimeSeries.from_json(json)
# print the JSON string representation of the object
print(ModelsStorageTypeTimeSeries.to_json())

# convert the object into a dict
models_storage_type_time_series_dict = models_storage_type_time_series_instance.to_dict()
# create an instance of ModelsStorageTypeTimeSeries from a dict
models_storage_type_time_series_from_dict = ModelsStorageTypeTimeSeries.from_dict(models_storage_type_time_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


