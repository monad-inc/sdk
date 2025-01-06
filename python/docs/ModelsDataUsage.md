# ModelsDataUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes** | **int** |  | [optional] 
**records** | **int** |  | [optional] 

## Example

```python
from monad.models.models_data_usage import ModelsDataUsage

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsDataUsage from a JSON string
models_data_usage_instance = ModelsDataUsage.from_json(json)
# print the JSON string representation of the object
print(ModelsDataUsage.to_json())

# convert the object into a dict
models_data_usage_dict = models_data_usage_instance.to_dict()
# create an instance of ModelsDataUsage from a dict
models_data_usage_from_dict = ModelsDataUsage.from_dict(models_data_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


