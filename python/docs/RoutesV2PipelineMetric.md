# RoutesV2PipelineMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pipeline_id** | **str** |  | [optional] 
**pipeline_name** | **str** |  | [optional] 
**total_bytes** | **int** |  | [optional] 
**values** | [**List[RoutesV2MetricsValue]**](RoutesV2MetricsValue.md) |  | [optional] 

## Example

```python
from monad.models.routes_v2_pipeline_metric import RoutesV2PipelineMetric

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2PipelineMetric from a JSON string
routes_v2_pipeline_metric_instance = RoutesV2PipelineMetric.from_json(json)
# print the JSON string representation of the object
print(RoutesV2PipelineMetric.to_json())

# convert the object into a dict
routes_v2_pipeline_metric_dict = routes_v2_pipeline_metric_instance.to_dict()
# create an instance of RoutesV2PipelineMetric from a dict
routes_v2_pipeline_metric_from_dict = RoutesV2PipelineMetric.from_dict(routes_v2_pipeline_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


