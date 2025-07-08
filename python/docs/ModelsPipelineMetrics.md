# ModelsPipelineMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_at** | **str** |  | [optional] 
**metric** | **str** |  | [optional] 
**node_id** | **str** |  | [optional] 
**node_slug** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**organization_name** | **str** |  | [optional] 
**pipeline_id** | **str** |  | [optional] 
**pipeline_name** | **str** |  | [optional] 
**resolution** | **str** |  | [optional] 
**start_at** | **str** |  | [optional] 
**values** | [**List[ModelsPipelineMetricsValue]**](ModelsPipelineMetricsValue.md) |  | [optional] 

## Example

```python
from monad.models.models_pipeline_metrics import ModelsPipelineMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineMetrics from a JSON string
models_pipeline_metrics_instance = ModelsPipelineMetrics.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineMetrics.to_json())

# convert the object into a dict
models_pipeline_metrics_dict = models_pipeline_metrics_instance.to_dict()
# create an instance of ModelsPipelineMetrics from a dict
models_pipeline_metrics_from_dict = ModelsPipelineMetrics.from_dict(models_pipeline_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


