# ModelsTransformConditions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**on_fail** | **str** | will default to bypass if left empty on create/update | [optional] 

## Example

```python
from monad.models.models_transform_conditions import ModelsTransformConditions

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsTransformConditions from a JSON string
models_transform_conditions_instance = ModelsTransformConditions.from_json(json)
# print the JSON string representation of the object
print(ModelsTransformConditions.to_json())

# convert the object into a dict
models_transform_conditions_dict = models_transform_conditions_instance.to_dict()
# create an instance of ModelsTransformConditions from a dict
models_transform_conditions_from_dict = ModelsTransformConditions.from_dict(models_transform_conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


