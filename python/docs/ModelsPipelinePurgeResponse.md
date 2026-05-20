# ModelsPipelinePurgeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**purged** | **bool** |  | [optional] 

## Example

```python
from monad.models.models_pipeline_purge_response import ModelsPipelinePurgeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelinePurgeResponse from a JSON string
models_pipeline_purge_response_instance = ModelsPipelinePurgeResponse.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelinePurgeResponse.to_json())

# convert the object into a dict
models_pipeline_purge_response_dict = models_pipeline_purge_response_instance.to_dict()
# create an instance of ModelsPipelinePurgeResponse from a dict
models_pipeline_purge_response_from_dict = ModelsPipelinePurgeResponse.from_dict(models_pipeline_purge_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


