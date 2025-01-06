# RoutesGetOutputResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_of** | [**List[ModelsPipeline]**](ModelsPipeline.md) |  | [optional] 
**config** | [**ModelsOutputConfig**](ModelsOutputConfig.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_get_output_response import RoutesGetOutputResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesGetOutputResponse from a JSON string
routes_get_output_response_instance = RoutesGetOutputResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesGetOutputResponse.to_json())

# convert the object into a dict
routes_get_output_response_dict = routes_get_output_response_instance.to_dict()
# create an instance of RoutesGetOutputResponse from a dict
routes_get_output_response_from_dict = RoutesGetOutputResponse.from_dict(routes_get_output_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


