# ModelsOrganizationAuditLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**ModelsAuditAction**](ModelsAuditAction.md) |  | [optional] 
**actor** | [**ModelsAPILogActor**](ModelsAPILogActor.md) |  | [optional] 
**id** | **str** |  | [optional] 
**occurred_at** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**request_id** | **str** |  | [optional] 
**resource** | [**GithubComMonadIncCorePkgTypesModelsAuditResource**](GithubComMonadIncCorePkgTypesModelsAuditResource.md) |  | [optional] 

## Example

```python
from monad.models.models_organization_audit_log import ModelsOrganizationAuditLog

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsOrganizationAuditLog from a JSON string
models_organization_audit_log_instance = ModelsOrganizationAuditLog.from_json(json)
# print the JSON string representation of the object
print(ModelsOrganizationAuditLog.to_json())

# convert the object into a dict
models_organization_audit_log_dict = models_organization_audit_log_instance.to_dict()
# create an instance of ModelsOrganizationAuditLog from a dict
models_organization_audit_log_from_dict = ModelsOrganizationAuditLog.from_dict(models_organization_audit_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


