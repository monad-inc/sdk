# ModelsTypeState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**first_seen** | **int** |  | [optional] 
**last_seen** | **int** |  | [optional] 

## Example

```python
from monad.models.models_type_state import ModelsTypeState

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsTypeState from a JSON string
models_type_state_instance = ModelsTypeState.from_json(json)
# print the JSON string representation of the object
print(ModelsTypeState.to_json())

# convert the object into a dict
models_type_state_dict = models_type_state_instance.to_dict()
# create an instance of ModelsTypeState from a dict
models_type_state_from_dict = ModelsTypeState.from_dict(models_type_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


