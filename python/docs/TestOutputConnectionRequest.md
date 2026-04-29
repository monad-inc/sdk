# TestOutputConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorOutputConfig**](SecretProcessesorOutputConfig.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.test_output_connection_request import TestOutputConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestOutputConnectionRequest from a JSON string
test_output_connection_request_instance = TestOutputConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(TestOutputConnectionRequest.to_json())

# convert the object into a dict
test_output_connection_request_dict = test_output_connection_request_instance.to_dict()
# create an instance of TestOutputConnectionRequest from a dict
test_output_connection_request_from_dict = TestOutputConnectionRequest.from_dict(test_output_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


