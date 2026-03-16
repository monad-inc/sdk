# ModelsProgressEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Label is an optional descriptor that is human-readable and can be displayed in the UI It should mainly be used to contain the field name/path that is used to extract timestamp for a given inputs data | [optional] 
**partition_key** | **str** | PartitionKey is an optional identifier for multi-entity inputs (e.g., \&quot;detector-123\&quot;, \&quot;us-east-1\&quot;) In a case where we store multiple state timestamps for a singular input we would use this field as a differentiator | [optional] 
**ranges** | [**List[GithubComMonadIncCorePkgTypesModelsTimeRange]**](GithubComMonadIncCorePkgTypesModelsTimeRange.md) | Ranges represents the time ranges that have been read by an input node. Each range is a tuple of (start, end) timestamps indicating what data has been processed. Multiple ranges allow tracking non-contiguous data reads. | [optional] 

## Example

```python
from monad.models.models_progress_entry import ModelsProgressEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsProgressEntry from a JSON string
models_progress_entry_instance = ModelsProgressEntry.from_json(json)
# print the JSON string representation of the object
print(ModelsProgressEntry.to_json())

# convert the object into a dict
models_progress_entry_dict = models_progress_entry_instance.to_dict()
# create an instance of ModelsProgressEntry from a dict
models_progress_entry_from_dict = ModelsProgressEntry.from_dict(models_progress_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


