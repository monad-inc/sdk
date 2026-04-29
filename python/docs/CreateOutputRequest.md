# CreateOutputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorOutputConfig**](SecretProcessesorOutputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**output_type** | **str** |  | [optional] 
**promise_id** | **str** |  | [optional] 

## Example

```python
from monad.models.create_output_request import CreateOutputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOutputRequest from a JSON string
create_output_request_instance = CreateOutputRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOutputRequest.to_json())

# convert the object into a dict
create_output_request_dict = create_output_request_instance.to_dict()
# create an instance of CreateOutputRequest from a dict
create_output_request_from_dict = CreateOutputRequest.from_dict(create_output_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


