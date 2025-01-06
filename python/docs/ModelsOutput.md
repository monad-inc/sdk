# ModelsOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsOutputConfig**](ModelsOutputConfig.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_output import ModelsOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsOutput from a JSON string
models_output_instance = ModelsOutput.from_json(json)
# print the JSON string representation of the object
print(ModelsOutput.to_json())

# convert the object into a dict
models_output_dict = models_output_instance.to_dict()
# create an instance of ModelsOutput from a dict
models_output_from_dict = ModelsOutput.from_dict(models_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


