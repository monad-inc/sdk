# RoutesV3CreateAlertRuleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Active indicates whether the alert rule is active | [optional] 
**description** | **str** | Description of the alert rule | [optional] 
**name** | **str** | Name of the alert rule | [optional] 
**pipeline_ids** | **List[str]** | Pipeline IDs that this alert rule applies to | [optional] 
**rule_config** | **Dict[str, object]** | RuleConfig contains the configuration for the alert rule | [optional] 
**severity** | **str** | Severity level of the alert (e.g., \&quot;critical\&quot;, \&quot;warning\&quot;, \&quot;info\&quot;) | [optional] 
**type** | **str** | Type of the alert rule | [optional] 

## Example

```python
from monad.models.routes_v3_create_alert_rule_request import RoutesV3CreateAlertRuleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3CreateAlertRuleRequest from a JSON string
routes_v3_create_alert_rule_request_instance = RoutesV3CreateAlertRuleRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV3CreateAlertRuleRequest.to_json())

# convert the object into a dict
routes_v3_create_alert_rule_request_dict = routes_v3_create_alert_rule_request_instance.to_dict()
# create an instance of RoutesV3CreateAlertRuleRequest from a dict
routes_v3_create_alert_rule_request_from_dict = RoutesV3CreateAlertRuleRequest.from_dict(routes_v3_create_alert_rule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


