# RoutesV3ImportTransformResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**RoutesV3TransformConfig**](RoutesV3TransformConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from monad.models.routes_v3_import_transform_response import RoutesV3ImportTransformResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3ImportTransformResponse from a JSON string
routes_v3_import_transform_response_instance = RoutesV3ImportTransformResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3ImportTransformResponse.to_json())

# convert the object into a dict
routes_v3_import_transform_response_dict = routes_v3_import_transform_response_instance.to_dict()
# create an instance of RoutesV3ImportTransformResponse from a dict
routes_v3_import_transform_response_from_dict = RoutesV3ImportTransformResponse.from_dict(routes_v3_import_transform_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


