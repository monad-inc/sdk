# UpdatePipelineV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from monad.models.update_pipeline_v1_request import UpdatePipelineV1Request

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePipelineV1Request from a JSON string
update_pipeline_v1_request_instance = UpdatePipelineV1Request.from_json(json)
# print the JSON string representation of the object
print(UpdatePipelineV1Request.to_json())

# convert the object into a dict
update_pipeline_v1_request_dict = update_pipeline_v1_request_instance.to_dict()
# create an instance of UpdatePipelineV1Request from a dict
update_pipeline_v1_request_from_dict = UpdatePipelineV1Request.from_dict(update_pipeline_v1_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


