# PipelineNodeStatusProgressEntries


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[PipelineNodeStatusProgressEntry]**](PipelineNodeStatusProgressEntry.md) |  | [optional] 

## Example

```python
from monad.models.pipeline_node_status_progress_entries import PipelineNodeStatusProgressEntries

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineNodeStatusProgressEntries from a JSON string
pipeline_node_status_progress_entries_instance = PipelineNodeStatusProgressEntries.from_json(json)
# print the JSON string representation of the object
print(PipelineNodeStatusProgressEntries.to_json())

# convert the object into a dict
pipeline_node_status_progress_entries_dict = pipeline_node_status_progress_entries_instance.to_dict()
# create an instance of PipelineNodeStatusProgressEntries from a dict
pipeline_node_status_progress_entries_from_dict = PipelineNodeStatusProgressEntries.from_dict(pipeline_node_status_progress_entries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


