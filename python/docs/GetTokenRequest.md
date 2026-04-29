# GetTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from monad.models.get_token_request import GetTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetTokenRequest from a JSON string
get_token_request_instance = GetTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GetTokenRequest.to_json())

# convert the object into a dict
get_token_request_dict = get_token_request_instance.to_dict()
# create an instance of GetTokenRequest from a dict
get_token_request_from_dict = GetTokenRequest.from_dict(get_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


