# LeafconditionsInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_meta** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type_id** | **str** |  | [optional] 

## Example

```python
from monad.models.leafconditions_info import LeafconditionsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of LeafconditionsInfo from a JSON string
leafconditions_info_instance = LeafconditionsInfo.from_json(json)
# print the JSON string representation of the object
print(LeafconditionsInfo.to_json())

# convert the object into a dict
leafconditions_info_dict = leafconditions_info_instance.to_dict()
# create an instance of LeafconditionsInfo from a dict
leafconditions_info_from_dict = LeafconditionsInfo.from_dict(leafconditions_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


