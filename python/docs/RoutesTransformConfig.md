# RoutesTransformConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditional** | [**ModelsTransformConditional**](ModelsTransformConditional.md) |  | [optional] 
**operations** | [**List[RoutesTransformOperation]**](RoutesTransformOperation.md) |  | [optional] 

## Example

```python
from monad.models.routes_transform_config import RoutesTransformConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesTransformConfig from a JSON string
routes_transform_config_instance = RoutesTransformConfig.from_json(json)
# print the JSON string representation of the object
print(RoutesTransformConfig.to_json())

# convert the object into a dict
routes_transform_config_dict = routes_transform_config_instance.to_dict()
# create an instance of RoutesTransformConfig from a dict
routes_transform_config_from_dict = RoutesTransformConfig.from_dict(routes_transform_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


