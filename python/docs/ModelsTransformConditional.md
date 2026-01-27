# ModelsTransformConditional


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**var_else** | **str** | will default to bypass if left empty on create/update | [optional] 

## Example

```python
from monad.models.models_transform_conditional import ModelsTransformConditional

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsTransformConditional from a JSON string
models_transform_conditional_instance = ModelsTransformConditional.from_json(json)
# print the JSON string representation of the object
print(ModelsTransformConditional.to_json())

# convert the object into a dict
models_transform_conditional_dict = models_transform_conditional_instance.to_dict()
# create an instance of ModelsTransformConditional from a dict
models_transform_conditional_from_dict = ModelsTransformConditional.from_dict(models_transform_conditional_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


