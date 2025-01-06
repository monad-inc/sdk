# ModelsInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsInputConfig**](ModelsInputConfig.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_input import ModelsInput

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsInput from a JSON string
models_input_instance = ModelsInput.from_json(json)
# print the JSON string representation of the object
print(ModelsInput.to_json())

# convert the object into a dict
models_input_dict = models_input_instance.to_dict()
# create an instance of ModelsInput from a dict
models_input_from_dict = ModelsInput.from_dict(models_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


