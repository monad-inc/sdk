# ApplyConditionV2Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**record** | **List[int]** |  | [optional] 

## Example

```python
from monad.models.apply_condition_v2_request import ApplyConditionV2Request

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyConditionV2Request from a JSON string
apply_condition_v2_request_instance = ApplyConditionV2Request.from_json(json)
# print the JSON string representation of the object
print(ApplyConditionV2Request.to_json())

# convert the object into a dict
apply_condition_v2_request_dict = apply_condition_v2_request_instance.to_dict()
# create an instance of ApplyConditionV2Request from a dict
apply_condition_v2_request_from_dict = ApplyConditionV2Request.from_dict(apply_condition_v2_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


