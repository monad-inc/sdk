# TestInputConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorInputConfig**](SecretProcessesorInputConfig.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.test_input_connection_request import TestInputConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestInputConnectionRequest from a JSON string
test_input_connection_request_instance = TestInputConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(TestInputConnectionRequest.to_json())

# convert the object into a dict
test_input_connection_request_dict = test_input_connection_request_instance.to_dict()
# create an instance of TestInputConnectionRequest from a dict
test_input_connection_request_from_dict = TestInputConnectionRequest.from_dict(test_input_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


