# ModelsTransformConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**ModelsTransformConditions**](ModelsTransformConditions.md) |  | [optional] 
**operations** | [**List[ModelsTransformOperation]**](ModelsTransformOperation.md) |  | [optional] 

## Example

```python
from monad.models.models_transform_config import ModelsTransformConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsTransformConfig from a JSON string
models_transform_config_instance = ModelsTransformConfig.from_json(json)
# print the JSON string representation of the object
print(ModelsTransformConfig.to_json())

# convert the object into a dict
models_transform_config_dict = models_transform_config_instance.to_dict()
# create an instance of ModelsTransformConfig from a dict
models_transform_config_from_dict = ModelsTransformConfig.from_dict(models_transform_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


