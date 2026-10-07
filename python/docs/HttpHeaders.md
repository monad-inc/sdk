# HttpHeaders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header_key** | **str** |  | [optional] 
**header_value** | **str** |  | [optional] 

## Example

```python
from monad.models.http_headers import HttpHeaders

# TODO update the JSON string below
json = "{}"
# create an instance of HttpHeaders from a JSON string
http_headers_instance = HttpHeaders.from_json(json)
# print the JSON string representation of the object
print(HttpHeaders.to_json())

# convert the object into a dict
http_headers_dict = http_headers_instance.to_dict()
# create an instance of HttpHeaders from a dict
http_headers_from_dict = HttpHeaders.from_dict(http_headers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


