# PipelineNodeStatusProgressTimestamp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Label is an optional descriptor for the timestamp that is human-readable and can be displayed in the UI It should mainly be used to contain the field name/path that is used to extract timestamp for a given inputs data | [optional] 
**partition_key** | **str** | PartitionKey is an optional identifier for multi-entity inputs (e.g., \&quot;detector-123\&quot;, \&quot;us-east-1\&quot;) In a case where we store multiple state timestamps for a singular input we would use this field as a differentiator | [optional] 
**timestamp** | **str** | Timestamp indicates the progress position | [optional] 

## Example

```python
from monad.models.pipeline_node_status_progress_timestamp import PipelineNodeStatusProgressTimestamp

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineNodeStatusProgressTimestamp from a JSON string
pipeline_node_status_progress_timestamp_instance = PipelineNodeStatusProgressTimestamp.from_json(json)
# print the JSON string representation of the object
print(PipelineNodeStatusProgressTimestamp.to_json())

# convert the object into a dict
pipeline_node_status_progress_timestamp_dict = pipeline_node_status_progress_timestamp_instance.to_dict()
# create an instance of PipelineNodeStatusProgressTimestamp from a dict
pipeline_node_status_progress_timestamp_from_dict = PipelineNodeStatusProgressTimestamp.from_dict(pipeline_node_status_progress_timestamp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


