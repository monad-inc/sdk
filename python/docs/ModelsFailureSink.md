# ModelsFailureSink

Sink is required when Action is sink.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_id** | **str** |  | [optional] 
**node** | [**ModelsPipelineNode**](ModelsPipelineNode.md) |  | [optional] 

## Example

```python
from monad.models.models_failure_sink import ModelsFailureSink

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsFailureSink from a JSON string
models_failure_sink_instance = ModelsFailureSink.from_json(json)
# print the JSON string representation of the object
print(ModelsFailureSink.to_json())

# convert the object into a dict
models_failure_sink_dict = models_failure_sink_instance.to_dict()
# create an instance of ModelsFailureSink from a dict
models_failure_sink_from_dict = ModelsFailureSink.from_dict(models_failure_sink_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


