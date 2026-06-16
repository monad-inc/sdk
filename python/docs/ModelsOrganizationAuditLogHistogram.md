# ModelsOrganizationAuditLogHistogram


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_seconds** | **float** |  | [optional] 
**buckets** | [**List[ModelsAuditLogHistogramBucket]**](ModelsAuditLogHistogramBucket.md) |  | [optional] 
**earliest_occurred_at** | **str** |  | [optional] 
**latest_occurred_at** | **str** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from monad.models.models_organization_audit_log_histogram import ModelsOrganizationAuditLogHistogram

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsOrganizationAuditLogHistogram from a JSON string
models_organization_audit_log_histogram_instance = ModelsOrganizationAuditLogHistogram.from_json(json)
# print the JSON string representation of the object
print(ModelsOrganizationAuditLogHistogram.to_json())

# convert the object into a dict
models_organization_audit_log_histogram_dict = models_organization_audit_log_histogram_instance.to_dict()
# create an instance of ModelsOrganizationAuditLogHistogram from a dict
models_organization_audit_log_histogram_from_dict = ModelsOrganizationAuditLogHistogram.from_dict(models_organization_audit_log_histogram_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


