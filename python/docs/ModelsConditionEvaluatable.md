# ModelsConditionEvaluatable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[ModelsConditionEvaluatable]**](ModelsConditionEvaluatable.md) |  | [optional] 
**config** | **Dict[str, object]** | leaf config | [optional] 
**operator** | **str** | Only set for logical nodes | [optional] 
**type_id** | **str** | Only set for leaf nodes | [optional] 

## Example

```python
from monad.models.models_condition_evaluatable import ModelsConditionEvaluatable

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsConditionEvaluatable from a JSON string
models_condition_evaluatable_instance = ModelsConditionEvaluatable.from_json(json)
# print the JSON string representation of the object
print(ModelsConditionEvaluatable.to_json())

# convert the object into a dict
models_condition_evaluatable_dict = models_condition_evaluatable_instance.to_dict()
# create an instance of ModelsConditionEvaluatable from a dict
models_condition_evaluatable_from_dict = ModelsConditionEvaluatable.from_dict(models_condition_evaluatable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


