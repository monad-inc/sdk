# RoutesV2PipelineRequestNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_id** | **str** |  | 
**component_type** | **str** |  | 
**enabled** | **bool** |  | 
**id** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_pipeline_request_node import RoutesV2PipelineRequestNode

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2PipelineRequestNode from a JSON string
routes_v2_pipeline_request_node_instance = RoutesV2PipelineRequestNode.from_json(json)
# print the JSON string representation of the object
print(RoutesV2PipelineRequestNode.to_json())

# convert the object into a dict
routes_v2_pipeline_request_node_dict = routes_v2_pipeline_request_node_instance.to_dict()
# create an instance of RoutesV2PipelineRequestNode from a dict
routes_v2_pipeline_request_node_from_dict = RoutesV2PipelineRequestNode.from_dict(routes_v2_pipeline_request_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


