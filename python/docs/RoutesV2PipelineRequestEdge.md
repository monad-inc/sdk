# RoutesV2PipelineRequestEdge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**description** | **str** |  | [optional] 
**from_node_instance_id** | **str** |  | 
**name** | **str** |  | [optional] 
**to_node_instance_id** | **str** |  | 

## Example

```python
from monad.models.routes_v2_pipeline_request_edge import RoutesV2PipelineRequestEdge

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2PipelineRequestEdge from a JSON string
routes_v2_pipeline_request_edge_instance = RoutesV2PipelineRequestEdge.from_json(json)
# print the JSON string representation of the object
print(RoutesV2PipelineRequestEdge.to_json())

# convert the object into a dict
routes_v2_pipeline_request_edge_dict = routes_v2_pipeline_request_edge_instance.to_dict()
# create an instance of RoutesV2PipelineRequestEdge from a dict
routes_v2_pipeline_request_edge_from_dict = RoutesV2PipelineRequestEdge.from_dict(routes_v2_pipeline_request_edge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


