# ModelsFieldState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**types** | [**Dict[str, ModelsTypeState]**](ModelsTypeState.md) |  | [optional] 

## Example

```python
from monad.models.models_field_state import ModelsFieldState

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsFieldState from a JSON string
models_field_state_instance = ModelsFieldState.from_json(json)
# print the JSON string representation of the object
print(ModelsFieldState.to_json())

# convert the object into a dict
models_field_state_dict = models_field_state_instance.to_dict()
# create an instance of ModelsFieldState from a dict
models_field_state_from_dict = ModelsFieldState.from_dict(models_field_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


