# ModelsPipelineNodeMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | **str** |  | [optional] 
**node_id** | **str** |  | [optional] 
**node_slug** | **str** |  | [optional] 
**pipeline_id** | **str** |  | [optional] 
**values** | [**List[ModelsPipelineNodeMetricsValue]**](ModelsPipelineNodeMetricsValue.md) |  | [optional] 

## Example

```python
from monad.models.models_pipeline_node_metrics import ModelsPipelineNodeMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineNodeMetrics from a JSON string
models_pipeline_node_metrics_instance = ModelsPipelineNodeMetrics.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineNodeMetrics.to_json())

# convert the object into a dict
models_pipeline_node_metrics_dict = models_pipeline_node_metrics_instance.to_dict()
# create an instance of ModelsPipelineNodeMetrics from a dict
models_pipeline_node_metrics_from_dict = ModelsPipelineNodeMetrics.from_dict(models_pipeline_node_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


