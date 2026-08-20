# RoutesV3TransformOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **Dict[str, object]** |  | [optional] 
**operation** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_transform_operation import RoutesV3TransformOperation

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3TransformOperation from a JSON string
routes_v3_transform_operation_instance = RoutesV3TransformOperation.from_json(json)
# print the JSON string representation of the object
print(RoutesV3TransformOperation.to_json())

# convert the object into a dict
routes_v3_transform_operation_dict = routes_v3_transform_operation_instance.to_dict()
# create an instance of RoutesV3TransformOperation from a dict
routes_v3_transform_operation_from_dict = RoutesV3TransformOperation.from_dict(routes_v3_transform_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


