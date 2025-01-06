# ModelsPipelineEdge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**ModelsPipelineEdgeConditions**](ModelsPipelineEdgeConditions.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**from_node_instance_id** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**pipeline_id** | **str** |  | [optional] 
**to_node_instance_id** | **str** |  | [optional] 

## Example

```python
from monad.models.models_pipeline_edge import ModelsPipelineEdge

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineEdge from a JSON string
models_pipeline_edge_instance = ModelsPipelineEdge.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineEdge.to_json())

# convert the object into a dict
models_pipeline_edge_dict = models_pipeline_edge_instance.to_dict()
# create an instance of ModelsPipelineEdge from a dict
models_pipeline_edge_from_dict = ModelsPipelineEdge.from_dict(models_pipeline_edge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


