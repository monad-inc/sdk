# ModelsPipelineStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egress** | [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**errors** | **int** |  | [optional] 
**expired_messages** | **int** |  | [optional] 
**ingress** | [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**last_ingested_time** | **str** |  | [optional] 
**nodes** | [**List[ModelsPipelineNodeStatus]**](ModelsPipelineNodeStatus.md) |  | [optional] 
**organization_id** | **str** |  | [optional] 
**organization_name** | **str** |  | [optional] 
**pipeline_id** | **str** |  | [optional] 
**pipeline_name** | **str** |  | [optional] 
**progress** | [**PipelineNodeStatusProgressEntries**](PipelineNodeStatusProgressEntries.md) |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from monad.models.models_pipeline_status import ModelsPipelineStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineStatus from a JSON string
models_pipeline_status_instance = ModelsPipelineStatus.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineStatus.to_json())

# convert the object into a dict
models_pipeline_status_dict = models_pipeline_status_instance.to_dict()
# create an instance of ModelsPipelineStatus from a dict
models_pipeline_status_from_dict = ModelsPipelineStatus.from_dict(models_pipeline_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


