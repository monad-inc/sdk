# PipelineNodeStatusProgressTimestamps


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamps** | [**List[PipelineNodeStatusProgressTimestamp]**](PipelineNodeStatusProgressTimestamp.md) |  | [optional] 

## Example

```python
from monad.models.pipeline_node_status_progress_timestamps import PipelineNodeStatusProgressTimestamps

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineNodeStatusProgressTimestamps from a JSON string
pipeline_node_status_progress_timestamps_instance = PipelineNodeStatusProgressTimestamps.from_json(json)
# print the JSON string representation of the object
print(PipelineNodeStatusProgressTimestamps.to_json())

# convert the object into a dict
pipeline_node_status_progress_timestamps_dict = pipeline_node_status_progress_timestamps_instance.to_dict()
# create an instance of PipelineNodeStatusProgressTimestamps from a dict
pipeline_node_status_progress_timestamps_from_dict = PipelineNodeStatusProgressTimestamps.from_dict(pipeline_node_status_progress_timestamps_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


