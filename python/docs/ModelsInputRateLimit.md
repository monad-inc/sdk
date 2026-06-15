# ModelsInputRateLimit

Optional ceiling on outbound Box API request rate. Absent ≡ no limit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **float** |  | [optional] 
**unit** | [**ModelsRateUnit**](ModelsRateUnit.md) |  | [optional] 

## Example

```python
from monad.models.models_input_rate_limit import ModelsInputRateLimit

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsInputRateLimit from a JSON string
models_input_rate_limit_instance = ModelsInputRateLimit.from_json(json)
# print the JSON string representation of the object
print(ModelsInputRateLimit.to_json())

# convert the object into a dict
models_input_rate_limit_dict = models_input_rate_limit_instance.to_dict()
# create an instance of ModelsInputRateLimit from a dict
models_input_rate_limit_from_dict = ModelsInputRateLimit.from_dict(models_input_rate_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


