# UpdateAlertRuleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Active indicates whether the alert rule is active | [optional] 
**description** | **str** | Description of the alert rule | [optional] 
**invert_selection** | **bool** | InvertSelection reads pipeline_ids as an exclude-list instead of an include-list, so the rule applies to all pipelines except those listed. An empty pipeline_ids still means all pipelines either way. | [optional] 
**name** | **str** | Name of the alert rule | [optional] 
**pipeline_ids** | **List[str]** | Pipeline IDs that this alert rule applies to | [optional] 
**rule_config** | **Dict[str, Optional[object]]** | RuleConfig contains the configuration for the alert rule | [optional] 
**severity** | **str** | Severity level of the alert. Must be one of \&quot;critical\&quot;, \&quot;high\&quot;, \&quot;medium\&quot;, \&quot;low\&quot;, \&quot;info\&quot;. | [optional] 

## Example

```python
from monad.models.update_alert_rule_request import UpdateAlertRuleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAlertRuleRequest from a JSON string
update_alert_rule_request_instance = UpdateAlertRuleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAlertRuleRequest.to_json())

# convert the object into a dict
update_alert_rule_request_dict = update_alert_rule_request_instance.to_dict()
# create an instance of UpdateAlertRuleRequest from a dict
update_alert_rule_request_from_dict = UpdateAlertRuleRequest.from_dict(update_alert_rule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


