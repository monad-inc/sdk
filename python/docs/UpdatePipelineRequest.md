# UpdatePipelineRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**edges** | [**List[RoutesV2PipelineRequestEdge]**](RoutesV2PipelineRequestEdge.md) |  | [optional] 
**enabled** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**nodes** | [**List[RoutesV2PipelineRequestNode]**](RoutesV2PipelineRequestNode.md) |  | [optional] 

## Example

```python
from monad.models.update_pipeline_request import UpdatePipelineRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePipelineRequest from a JSON string
update_pipeline_request_instance = UpdatePipelineRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePipelineRequest.to_json())

# convert the object into a dict
update_pipeline_request_dict = update_pipeline_request_instance.to_dict()
# create an instance of UpdatePipelineRequest from a dict
update_pipeline_request_from_dict = UpdatePipelineRequest.from_dict(update_pipeline_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


