# RoutesV3AlertRuleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**invert_selection** | **bool** |  | [optional] 
**managed_by** | [**ModelsManagedBy**](ModelsManagedBy.md) |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**pipeline_ids** | **List[str]** |  | [optional] 
**resource_metadata** | [**ConnectormetaResourceMetadata**](ConnectormetaResourceMetadata.md) |  | [optional] 
**rule_config** | **Dict[str, object]** |  | [optional] 
**severity** | **str** |  | [optional] 
**tags** | **List[str]** | TODO(ENG-11020): drop omitempty once tagging is GA; it matches pipelines meanwhile. | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_alert_rule_response import RoutesV3AlertRuleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3AlertRuleResponse from a JSON string
routes_v3_alert_rule_response_instance = RoutesV3AlertRuleResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3AlertRuleResponse.to_json())

# convert the object into a dict
routes_v3_alert_rule_response_dict = routes_v3_alert_rule_response_instance.to_dict()
# create an instance of RoutesV3AlertRuleResponse from a dict
routes_v3_alert_rule_response_from_dict = RoutesV3AlertRuleResponse.from_dict(routes_v3_alert_rule_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


