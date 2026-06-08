# ModelsOrganizationAuditLogList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logs** | [**List[ModelsOrganizationAuditLog]**](ModelsOrganizationAuditLog.md) |  | [optional] 
**pagination** | [**ModelsCursorPagination**](ModelsCursorPagination.md) |  | [optional] 

## Example

```python
from monad.models.models_organization_audit_log_list import ModelsOrganizationAuditLogList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsOrganizationAuditLogList from a JSON string
models_organization_audit_log_list_instance = ModelsOrganizationAuditLogList.from_json(json)
# print the JSON string representation of the object
print(ModelsOrganizationAuditLogList.to_json())

# convert the object into a dict
models_organization_audit_log_list_dict = models_organization_audit_log_list_instance.to_dict()
# create an instance of ModelsOrganizationAuditLogList from a dict
models_organization_audit_log_list_from_dict = ModelsOrganizationAuditLogList.from_dict(models_organization_audit_log_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


