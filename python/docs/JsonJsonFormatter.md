# JsonJsonFormatter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from monad.models.json_json_formatter import JsonJsonFormatter

# TODO update the JSON string below
json = "{}"
# create an instance of JsonJsonFormatter from a JSON string
json_json_formatter_instance = JsonJsonFormatter.from_json(json)
# print the JSON string representation of the object
print(JsonJsonFormatter.to_json())

# convert the object into a dict
json_json_formatter_dict = json_json_formatter_instance.to_dict()
# create an instance of JsonJsonFormatter from a dict
json_json_formatter_from_dict = JsonJsonFormatter.from_dict(json_json_formatter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


