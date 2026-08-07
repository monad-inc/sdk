# ModelsAuditResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**new** | **object** |  | [optional] 
**old** | **object** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.models_audit_resource import ModelsAuditResource

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsAuditResource from a JSON string
models_audit_resource_instance = ModelsAuditResource.from_json(json)
# print the JSON string representation of the object
print(ModelsAuditResource.to_json())

# convert the object into a dict
models_audit_resource_dict = models_audit_resource_instance.to_dict()
# create an instance of ModelsAuditResource from a dict
models_audit_resource_from_dict = ModelsAuditResource.from_dict(models_audit_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


