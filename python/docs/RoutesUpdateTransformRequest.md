# RoutesUpdateTransformRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsTransformConfig**](ModelsTransformConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from monad.models.routes_update_transform_request import RoutesUpdateTransformRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesUpdateTransformRequest from a JSON string
routes_update_transform_request_instance = RoutesUpdateTransformRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesUpdateTransformRequest.to_json())

# convert the object into a dict
routes_update_transform_request_dict = routes_update_transform_request_instance.to_dict()
# create an instance of RoutesUpdateTransformRequest from a dict
routes_update_transform_request_from_dict = RoutesUpdateTransformRequest.from_dict(routes_update_transform_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


