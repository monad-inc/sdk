# RoutesV3TransformConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | [**List[RoutesV3TransformOperation]**](RoutesV3TransformOperation.md) |  | [optional] 

## Example

```python
from monad.models.routes_v3_transform_config import RoutesV3TransformConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3TransformConfig from a JSON string
routes_v3_transform_config_instance = RoutesV3TransformConfig.from_json(json)
# print the JSON string representation of the object
print(RoutesV3TransformConfig.to_json())

# convert the object into a dict
routes_v3_transform_config_dict = routes_v3_transform_config_instance.to_dict()
# create an instance of RoutesV3TransformConfig from a dict
routes_v3_transform_config_from_dict = RoutesV3TransformConfig.from_dict(routes_v3_transform_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


