# DelimitedDelimiterFormatter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delimiter** | **str** |  | 
**headers** | **List[str]** |  | 

## Example

```python
from monad.models.delimited_delimiter_formatter import DelimitedDelimiterFormatter

# TODO update the JSON string below
json = "{}"
# create an instance of DelimitedDelimiterFormatter from a JSON string
delimited_delimiter_formatter_instance = DelimitedDelimiterFormatter.from_json(json)
# print the JSON string representation of the object
print(DelimitedDelimiterFormatter.to_json())

# convert the object into a dict
delimited_delimiter_formatter_dict = delimited_delimiter_formatter_instance.to_dict()
# create an instance of DelimitedDelimiterFormatter from a dict
delimited_delimiter_formatter_from_dict = DelimitedDelimiterFormatter.from_dict(delimited_delimiter_formatter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


