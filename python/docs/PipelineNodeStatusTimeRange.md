# PipelineNodeStatusTimeRange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | End is the end of the time range (inclusive) | [optional] 
**start** | **str** | Start is the beginning of the time range (inclusive) | [optional] 

## Example

```python
from monad.models.pipeline_node_status_time_range import PipelineNodeStatusTimeRange

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineNodeStatusTimeRange from a JSON string
pipeline_node_status_time_range_instance = PipelineNodeStatusTimeRange.from_json(json)
# print the JSON string representation of the object
print(PipelineNodeStatusTimeRange.to_json())

# convert the object into a dict
pipeline_node_status_time_range_dict = pipeline_node_status_time_range_instance.to_dict()
# create an instance of PipelineNodeStatusTimeRange from a dict
pipeline_node_status_time_range_from_dict = PipelineNodeStatusTimeRange.from_dict(pipeline_node_status_time_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


