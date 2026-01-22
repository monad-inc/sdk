# RoutesTransformOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | [**RoutesTransformOperationArguments**](RoutesTransformOperationArguments.md) |  | [optional] 
**description** | **str** |  | [optional] 
**operation** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_transform_operation import RoutesTransformOperation

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesTransformOperation from a JSON string
routes_transform_operation_instance = RoutesTransformOperation.from_json(json)
# print the JSON string representation of the object
print(RoutesTransformOperation.to_json())

# convert the object into a dict
routes_transform_operation_dict = routes_transform_operation_instance.to_dict()
# create an instance of RoutesTransformOperation from a dict
routes_transform_operation_from_dict = RoutesTransformOperation.from_dict(routes_transform_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


