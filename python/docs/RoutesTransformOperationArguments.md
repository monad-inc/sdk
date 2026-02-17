# RoutesTransformOperationArguments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | [**UtcTimestampArgumentsConfig**](UtcTimestampArgumentsConfig.md) |  | [optional] 

## Example

```python
from monad.models.routes_transform_operation_arguments import RoutesTransformOperationArguments

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesTransformOperationArguments from a JSON string
routes_transform_operation_arguments_instance = RoutesTransformOperationArguments.from_json(json)
# print the JSON string representation of the object
print(RoutesTransformOperationArguments.to_json())

# convert the object into a dict
routes_transform_operation_arguments_dict = routes_transform_operation_arguments_instance.to_dict()
# create an instance of RoutesTransformOperationArguments from a dict
routes_transform_operation_arguments_from_dict = RoutesTransformOperationArguments.from_dict(routes_transform_operation_arguments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


