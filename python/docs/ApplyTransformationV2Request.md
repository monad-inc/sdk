# ApplyTransformationV2Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsTransformConfig**](ModelsTransformConfig.md) |  | [optional] 
**record** | **List[int]** |  | [optional] 

## Example

```python
from monad.models.apply_transformation_v2_request import ApplyTransformationV2Request

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyTransformationV2Request from a JSON string
apply_transformation_v2_request_instance = ApplyTransformationV2Request.from_json(json)
# print the JSON string representation of the object
print(ApplyTransformationV2Request.to_json())

# convert the object into a dict
apply_transformation_v2_request_dict = apply_transformation_v2_request_instance.to_dict()
# create an instance of ApplyTransformationV2Request from a dict
apply_transformation_v2_request_from_dict = ApplyTransformationV2Request.from_dict(apply_transformation_v2_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


