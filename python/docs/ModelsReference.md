# ModelsReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 

## Example

```python
from monad.models.models_reference import ModelsReference

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsReference from a JSON string
models_reference_instance = ModelsReference.from_json(json)
# print the JSON string representation of the object
print(ModelsReference.to_json())

# convert the object into a dict
models_reference_dict = models_reference_instance.to_dict()
# create an instance of ModelsReference from a dict
models_reference_from_dict = ModelsReference.from_dict(models_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


