# ModelsTransform


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsTransformConfig**](ModelsTransformConfig.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_transform import ModelsTransform

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsTransform from a JSON string
models_transform_instance = ModelsTransform.from_json(json)
# print the JSON string representation of the object
print(ModelsTransform.to_json())

# convert the object into a dict
models_transform_dict = models_transform_instance.to_dict()
# create an instance of ModelsTransform from a dict
models_transform_from_dict = ModelsTransform.from_dict(models_transform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


