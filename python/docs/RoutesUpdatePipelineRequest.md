# RoutesUpdatePipelineRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from monad.models.routes_update_pipeline_request import RoutesUpdatePipelineRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesUpdatePipelineRequest from a JSON string
routes_update_pipeline_request_instance = RoutesUpdatePipelineRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesUpdatePipelineRequest.to_json())

# convert the object into a dict
routes_update_pipeline_request_dict = routes_update_pipeline_request_instance.to_dict()
# create an instance of RoutesUpdatePipelineRequest from a dict
routes_update_pipeline_request_from_dict = RoutesUpdatePipelineRequest.from_dict(routes_update_pipeline_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


