# SecurityGroupsFilterConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**values** | **List[str]** |  | [optional] 

## Example

```python
from monad.models.security_groups_filter_config import SecurityGroupsFilterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityGroupsFilterConfig from a JSON string
security_groups_filter_config_instance = SecurityGroupsFilterConfig.from_json(json)
# print the JSON string representation of the object
print(SecurityGroupsFilterConfig.to_json())

# convert the object into a dict
security_groups_filter_config_dict = security_groups_filter_config_instance.to_dict()
# create an instance of SecurityGroupsFilterConfig from a dict
security_groups_filter_config_from_dict = SecurityGroupsFilterConfig.from_dict(security_groups_filter_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


