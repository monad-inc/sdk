# ModelsAlertRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**pipeline_ids** | **List[str]** |  | [optional] 
**rule_config** | **Dict[str, object]** |  | [optional] 
**severity** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_alert_rule import ModelsAlertRule

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsAlertRule from a JSON string
models_alert_rule_instance = ModelsAlertRule.from_json(json)
# print the JSON string representation of the object
print(ModelsAlertRule.to_json())

# convert the object into a dict
models_alert_rule_dict = models_alert_rule_instance.to_dict()
# create an instance of ModelsAlertRule from a dict
models_alert_rule_from_dict = ModelsAlertRule.from_dict(models_alert_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


