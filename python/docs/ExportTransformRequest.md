# ExportTransformRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** |  | [optional] 
**config** | **Dict[str, object]** |  | [optional] 
**contributors** | **List[str]** |  | [optional] 
**description** | **str** |  | [optional] 
**inputs** | **List[str]** |  | [optional] 
**name** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from monad.models.export_transform_request import ExportTransformRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportTransformRequest from a JSON string
export_transform_request_instance = ExportTransformRequest.from_json(json)
# print the JSON string representation of the object
print(ExportTransformRequest.to_json())

# convert the object into a dict
export_transform_request_dict = export_transform_request_instance.to_dict()
# create an instance of ExportTransformRequest from a dict
export_transform_request_from_dict = ExportTransformRequest.from_dict(export_transform_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


