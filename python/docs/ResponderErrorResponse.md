# ResponderErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_details** | **object** |  | [optional] 
**code** | **int** |  | [optional] 
**error** | **str** |  | [optional] 

## Example

```python
from monad.models.responder_error_response import ResponderErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResponderErrorResponse from a JSON string
responder_error_response_instance = ResponderErrorResponse.from_json(json)
# print the JSON string representation of the object
print(ResponderErrorResponse.to_json())

# convert the object into a dict
responder_error_response_dict = responder_error_response_instance.to_dict()
# create an instance of ResponderErrorResponse from a dict
responder_error_response_from_dict = ResponderErrorResponse.from_dict(responder_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


