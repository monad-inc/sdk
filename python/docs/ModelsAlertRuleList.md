# ModelsAlertRuleList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_rules** | [**List[ModelsAlertRule]**](ModelsAlertRule.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.models_alert_rule_list import ModelsAlertRuleList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsAlertRuleList from a JSON string
models_alert_rule_list_instance = ModelsAlertRuleList.from_json(json)
# print the JSON string representation of the object
print(ModelsAlertRuleList.to_json())

# convert the object into a dict
models_alert_rule_list_dict = models_alert_rule_list_instance.to_dict()
# create an instance of ModelsAlertRuleList from a dict
models_alert_rule_list_from_dict = ModelsAlertRuleList.from_dict(models_alert_rule_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


