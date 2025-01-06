# RoutesCreateTransformRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsTransformConfig**](ModelsTransformConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from monad.models.routes_create_transform_request import RoutesCreateTransformRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesCreateTransformRequest from a JSON string
routes_create_transform_request_instance = RoutesCreateTransformRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesCreateTransformRequest.to_json())

# convert the object into a dict
routes_create_transform_request_dict = routes_create_transform_request_instance.to_dict()
# create an instance of RoutesCreateTransformRequest from a dict
routes_create_transform_request_from_dict = RoutesCreateTransformRequest.from_dict(routes_create_transform_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


