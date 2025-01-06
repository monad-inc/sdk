# RoutesV2CreatePipelineRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**edges** | [**List[RoutesV2PipelineRequestEdge]**](RoutesV2PipelineRequestEdge.md) |  | 
**enabled** | **bool** |  | 
**name** | **str** |  | 
**nodes** | [**List[RoutesV2PipelineRequestNode]**](RoutesV2PipelineRequestNode.md) |  | 

## Example

```python
from monad.models.routes_v2_create_pipeline_request import RoutesV2CreatePipelineRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2CreatePipelineRequest from a JSON string
routes_v2_create_pipeline_request_instance = RoutesV2CreatePipelineRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2CreatePipelineRequest.to_json())

# convert the object into a dict
routes_v2_create_pipeline_request_dict = routes_v2_create_pipeline_request_instance.to_dict()
# create an instance of RoutesV2CreatePipelineRequest from a dict
routes_v2_create_pipeline_request_from_dict = RoutesV2CreatePipelineRequest.from_dict(routes_v2_create_pipeline_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


