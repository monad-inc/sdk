# ReplaceOutputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorOutputConfig**](SecretProcessesorOutputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.replace_output_request import ReplaceOutputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceOutputRequest from a JSON string
replace_output_request_instance = ReplaceOutputRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceOutputRequest.to_json())

# convert the object into a dict
replace_output_request_dict = replace_output_request_instance.to_dict()
# create an instance of ReplaceOutputRequest from a dict
replace_output_request_from_dict = ReplaceOutputRequest.from_dict(replace_output_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


