# ModelsReferences


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | [**List[ModelsReference]**](ModelsReference.md) |  | [optional] 

## Example

```python
from monad.models.models_references import ModelsReferences

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsReferences from a JSON string
models_references_instance = ModelsReferences.from_json(json)
# print the JSON string representation of the object
print(ModelsReferences.to_json())

# convert the object into a dict
models_references_dict = models_references_instance.to_dict()
# create an instance of ModelsReferences from a dict
models_references_from_dict = ModelsReferences.from_dict(models_references_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


