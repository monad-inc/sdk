# ModelsComponentReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.models_component_reference import ModelsComponentReference

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsComponentReference from a JSON string
models_component_reference_instance = ModelsComponentReference.from_json(json)
# print the JSON string representation of the object
print(ModelsComponentReference.to_json())

# convert the object into a dict
models_component_reference_dict = models_component_reference_instance.to_dict()
# create an instance of ModelsComponentReference from a dict
models_component_reference_from_dict = ModelsComponentReference.from_dict(models_component_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


