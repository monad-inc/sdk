# ModelsTimeRange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | End is the end of the time range (inclusive) | [optional] 
**start** | **str** | Start is the beginning of the time range (inclusive) | [optional] 

## Example

```python
from monad.models.models_time_range import ModelsTimeRange

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsTimeRange from a JSON string
models_time_range_instance = ModelsTimeRange.from_json(json)
# print the JSON string representation of the object
print(ModelsTimeRange.to_json())

# convert the object into a dict
models_time_range_dict = models_time_range_instance.to_dict()
# create an instance of ModelsTimeRange from a dict
models_time_range_from_dict = ModelsTimeRange.from_dict(models_time_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


