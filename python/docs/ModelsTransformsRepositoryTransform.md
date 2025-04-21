# ModelsTransformsRepositoryTransform


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsTransformConfig**](ModelsTransformConfig.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**input_type_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_transforms_repository_transform import ModelsTransformsRepositoryTransform

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsTransformsRepositoryTransform from a JSON string
models_transforms_repository_transform_instance = ModelsTransformsRepositoryTransform.from_json(json)
# print the JSON string representation of the object
print(ModelsTransformsRepositoryTransform.to_json())

# convert the object into a dict
models_transforms_repository_transform_dict = models_transforms_repository_transform_instance.to_dict()
# create an instance of ModelsTransformsRepositoryTransform from a dict
models_transforms_repository_transform_from_dict = ModelsTransformsRepositoryTransform.from_dict(models_transforms_repository_transform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


