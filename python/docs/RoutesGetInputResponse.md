# RoutesGetInputResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_of** | [**List[ModelsPipeline]**](ModelsPipeline.md) |  | [optional] 
**config** | [**ModelsInputConfig**](ModelsInputConfig.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_get_input_response import RoutesGetInputResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesGetInputResponse from a JSON string
routes_get_input_response_instance = RoutesGetInputResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesGetInputResponse.to_json())

# convert the object into a dict
routes_get_input_response_dict = routes_get_input_response_instance.to_dict()
# create an instance of RoutesGetInputResponse from a dict
routes_get_input_response_from_dict = RoutesGetInputResponse.from_dict(routes_get_input_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


