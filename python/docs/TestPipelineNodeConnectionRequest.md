# TestPipelineNodeConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_type** | [**ModelsComponentType**](ModelsComponentType.md) |  | [optional] 
**config** | [**RoutesV2TestNodeConfig**](RoutesV2TestNodeConfig.md) |  | [optional] 
**type** | **str** | connector subtype (e.g. \&quot;s3\&quot;) | [optional] 
**version** | **int** |  | [optional] 

## Example

```python
from monad.models.test_pipeline_node_connection_request import TestPipelineNodeConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestPipelineNodeConnectionRequest from a JSON string
test_pipeline_node_connection_request_instance = TestPipelineNodeConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(TestPipelineNodeConnectionRequest.to_json())

# convert the object into a dict
test_pipeline_node_connection_request_dict = test_pipeline_node_connection_request_instance.to_dict()
# create an instance of TestPipelineNodeConnectionRequest from a dict
test_pipeline_node_connection_request_from_dict = TestPipelineNodeConnectionRequest.from_dict(test_pipeline_node_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


