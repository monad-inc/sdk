# SecurityGroupsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**values** | **List[str]** |  | [optional] 

## Example

```python
from monad.models.security_groups_filter import SecurityGroupsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityGroupsFilter from a JSON string
security_groups_filter_instance = SecurityGroupsFilter.from_json(json)
# print the JSON string representation of the object
print(SecurityGroupsFilter.to_json())

# convert the object into a dict
security_groups_filter_dict = security_groups_filter_instance.to_dict()
# create an instance of SecurityGroupsFilter from a dict
security_groups_filter_from_dict = SecurityGroupsFilter.from_dict(security_groups_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


