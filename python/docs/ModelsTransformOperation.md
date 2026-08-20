# ModelsTransformOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **Dict[str, object]** |  | [optional] 
**description** | **str** |  | [optional] 
**operation** | **str** |  | [optional] 

## Example

```python
from monad.models.models_transform_operation import ModelsTransformOperation

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsTransformOperation from a JSON string
models_transform_operation_instance = ModelsTransformOperation.from_json(json)
# print the JSON string representation of the object
print(ModelsTransformOperation.to_json())

# convert the object into a dict
models_transform_operation_dict = models_transform_operation_instance.to_dict()
# create an instance of ModelsTransformOperation from a dict
models_transform_operation_from_dict = ModelsTransformOperation.from_dict(models_transform_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


