# ModelsPipelineNodeMetricsValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **int** |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from monad.models.models_pipeline_node_metrics_value import ModelsPipelineNodeMetricsValue

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineNodeMetricsValue from a JSON string
models_pipeline_node_metrics_value_instance = ModelsPipelineNodeMetricsValue.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineNodeMetricsValue.to_json())

# convert the object into a dict
models_pipeline_node_metrics_value_dict = models_pipeline_node_metrics_value_instance.to_dict()
# create an instance of ModelsPipelineNodeMetricsValue from a dict
models_pipeline_node_metrics_value_from_dict = ModelsPipelineNodeMetricsValue.from_dict(models_pipeline_node_metrics_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


