# ModelsPipelineStreamInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes** | **int** |  | [optional] 
**records** | **int** |  | [optional] 

## Example

```python
from monad.models.models_pipeline_stream_info import ModelsPipelineStreamInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineStreamInfo from a JSON string
models_pipeline_stream_info_instance = ModelsPipelineStreamInfo.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineStreamInfo.to_json())

# convert the object into a dict
models_pipeline_stream_info_dict = models_pipeline_stream_info_instance.to_dict()
# create an instance of ModelsPipelineStreamInfo from a dict
models_pipeline_stream_info_from_dict = ModelsPipelineStreamInfo.from_dict(models_pipeline_stream_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


