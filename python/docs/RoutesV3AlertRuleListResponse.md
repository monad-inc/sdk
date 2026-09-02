# RoutesV3AlertRuleListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_rules** | [**List[RoutesV3AlertRuleWithMetadata]**](RoutesV3AlertRuleWithMetadata.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.routes_v3_alert_rule_list_response import RoutesV3AlertRuleListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3AlertRuleListResponse from a JSON string
routes_v3_alert_rule_list_response_instance = RoutesV3AlertRuleListResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3AlertRuleListResponse.to_json())

# convert the object into a dict
routes_v3_alert_rule_list_response_dict = routes_v3_alert_rule_list_response_instance.to_dict()
# create an instance of RoutesV3AlertRuleListResponse from a dict
routes_v3_alert_rule_list_response_from_dict = RoutesV3AlertRuleListResponse.from_dict(routes_v3_alert_rule_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


