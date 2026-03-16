# ModelsProgressEntries


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[ModelsProgressEntry]**](ModelsProgressEntry.md) |  | [optional] 

## Example

```python
from monad.models.models_progress_entries import ModelsProgressEntries

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsProgressEntries from a JSON string
models_progress_entries_instance = ModelsProgressEntries.from_json(json)
# print the JSON string representation of the object
print(ModelsProgressEntries.to_json())

# convert the object into a dict
models_progress_entries_dict = models_progress_entries_instance.to_dict()
# create an instance of ModelsProgressEntries from a dict
models_progress_entries_from_dict = ModelsProgressEntries.from_dict(models_progress_entries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


