# ModelsPipelineMetricsValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **int** |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from monad.models.models_pipeline_metrics_value import ModelsPipelineMetricsValue

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineMetricsValue from a JSON string
models_pipeline_metrics_value_instance = ModelsPipelineMetricsValue.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineMetricsValue.to_json())

# convert the object into a dict
models_pipeline_metrics_value_dict = models_pipeline_metrics_value_instance.to_dict()
# create an instance of ModelsPipelineMetricsValue from a dict
models_pipeline_metrics_value_from_dict = ModelsPipelineMetricsValue.from_dict(models_pipeline_metrics_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


