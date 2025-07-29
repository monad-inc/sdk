# ModelsPipelineNodeStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_type** | **str** |  | [optional] 
**component_type_id** | **str** |  | [optional] 
**egress** | [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**errors** | **int** |  | [optional] 
**expired_messages** | **int** |  | [optional] 
**ingress** | [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**node_id** | **str** |  | [optional] 
**node_slug** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from monad.models.models_pipeline_node_status import ModelsPipelineNodeStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineNodeStatus from a JSON string
models_pipeline_node_status_instance = ModelsPipelineNodeStatus.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineNodeStatus.to_json())

# convert the object into a dict
models_pipeline_node_status_dict = models_pipeline_node_status_instance.to_dict()
# create an instance of ModelsPipelineNodeStatus from a dict
models_pipeline_node_status_from_dict = ModelsPipelineNodeStatus.from_dict(models_pipeline_node_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


