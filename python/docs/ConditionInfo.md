# ConditionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_meta** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type_id** | **str** |  | [optional] 

## Example

```python
from monad.models.condition_info import ConditionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ConditionInfo from a JSON string
condition_info_instance = ConditionInfo.from_json(json)
# print the JSON string representation of the object
print(ConditionInfo.to_json())

# convert the object into a dict
condition_info_dict = condition_info_instance.to_dict()
# create an instance of ConditionInfo from a dict
condition_info_from_dict = ConditionInfo.from_dict(condition_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


