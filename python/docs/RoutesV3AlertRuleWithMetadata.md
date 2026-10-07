# RoutesV3AlertRuleWithMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**invert_selection** | **bool** | InvertSelection makes the selection (PipelineIDs and TagIDs) an exclude-list. Only pipeline-granularity rule types consult it. | [optional] 
**managed_by** | [**ModelsManagedBy**](ModelsManagedBy.md) |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**pipeline_ids** | **List[str]** |  | [optional] 
**resource_metadata** | [**ConnectormetaResourceMetadata**](ConnectormetaResourceMetadata.md) |  | [optional] 
**rule_config** | **Dict[str, object]** |  | [optional] 
**severity** | **str** |  | [optional] 
**tag_ids** | **List[str]** | TagIDs adds every pipeline carrying any of these tags to the selection. | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_alert_rule_with_metadata import RoutesV3AlertRuleWithMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3AlertRuleWithMetadata from a JSON string
routes_v3_alert_rule_with_metadata_instance = RoutesV3AlertRuleWithMetadata.from_json(json)
# print the JSON string representation of the object
print(RoutesV3AlertRuleWithMetadata.to_json())

# convert the object into a dict
routes_v3_alert_rule_with_metadata_dict = routes_v3_alert_rule_with_metadata_instance.to_dict()
# create an instance of RoutesV3AlertRuleWithMetadata from a dict
routes_v3_alert_rule_with_metadata_from_dict = RoutesV3AlertRuleWithMetadata.from_dict(routes_v3_alert_rule_with_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


