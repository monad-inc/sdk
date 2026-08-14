# PreviewOutputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorOutputConfig**](SecretProcessesorOutputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.preview_output_request import PreviewOutputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PreviewOutputRequest from a JSON string
preview_output_request_instance = PreviewOutputRequest.from_json(json)
# print the JSON string representation of the object
print(PreviewOutputRequest.to_json())

# convert the object into a dict
preview_output_request_dict = preview_output_request_instance.to_dict()
# create an instance of PreviewOutputRequest from a dict
preview_output_request_from_dict = PreviewOutputRequest.from_dict(preview_output_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


