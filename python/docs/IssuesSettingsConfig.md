# IssuesSettingsConfig

Wiz Issues settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_ids** | **List[str]** | @Description Filter Issues created by specific control IDs | [optional] 
**has_note** | **str** | @Description Filter Issues with or without a note | [optional] 
**has_remediation** | **str** | @Description Filter Issues with or without remediation | [optional] 
**has_service_ticket** | **str** | @Description Filter Issues with or without related service ticket | [optional] 
**issue_ids** | **List[str]** | @Description Filter only Issues that match these specific IDs | [optional] 
**issue_types** | **List[str]** | @Description Filter by Issue type | [optional] 
**project_ids** | **List[str]** | @Description Filter Issues associated with specific project IDs | [optional] 
**related_entity_id** | **str** | @Description Filter by related entity ids | [optional] 
**resolution_reasons** | **List[str]** | @Description Filter Issues by resolution reason | [optional] 
**risk_equals_all** | **List[str]** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name @Description All specified risks must be present | [optional] 
**risk_equals_any** | **List[str]** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name | [optional] 
**search_query** | **str** | @Description Free text search on Issue title or object name @Description Returns NULL if no match is found | [optional] 
**security_scan** | **str** | @Description Filter by security scan source | [optional] 
**severities** | **List[str]** | @Description Filter Issues according to Control severity | [optional] 
**stack_layers** | **List[str]** | @Description Filter Issues from specific stack layers | [optional] 
**status** | **List[str]** | @Description Filter by Issue handling status @Description Default: OPEN | [optional] 
**tenant_data_center** | **str** | DataCenter represents the tenant&#39;s data center location @Description Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; @Description Find your tenant data center on the Tenant Info page in Wiz, or request it from your Wiz customer contact | [optional] 

## Example

```python
from monad.models.issues_settings_config import IssuesSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IssuesSettingsConfig from a JSON string
issues_settings_config_instance = IssuesSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(IssuesSettingsConfig.to_json())

# convert the object into a dict
issues_settings_config_dict = issues_settings_config_instance.to_dict()
# create an instance of IssuesSettingsConfig from a dict
issues_settings_config_from_dict = IssuesSettingsConfig.from_dict(issues_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


