# TypesStringFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison** | [**TypesStringComparison**](TypesStringComparison.md) |  | [optional] 
**value** | **str** | The value to filter on.  This member is required. | [optional] 

## Example

```python
from monad.models.types_string_filter import TypesStringFilter

# TODO update the JSON string below
json = "{}"
# create an instance of TypesStringFilter from a JSON string
types_string_filter_instance = TypesStringFilter.from_json(json)
# print the JSON string representation of the object
print(TypesStringFilter.to_json())

# convert the object into a dict
types_string_filter_dict = types_string_filter_instance.to_dict()
# create an instance of TypesStringFilter from a dict
types_string_filter_from_dict = TypesStringFilter.from_dict(types_string_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


