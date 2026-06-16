# ModelsAuditLogHistogramBucket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by_action** | **Dict[str, int]** |  | [optional] 
**by_resource_type** | **Dict[str, int]** |  | [optional] 
**count** | **int** |  | [optional] 
**index** | **int** |  | [optional] 
**start** | **str** |  | [optional] 

## Example

```python
from monad.models.models_audit_log_histogram_bucket import ModelsAuditLogHistogramBucket

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsAuditLogHistogramBucket from a JSON string
models_audit_log_histogram_bucket_instance = ModelsAuditLogHistogramBucket.from_json(json)
# print the JSON string representation of the object
print(ModelsAuditLogHistogramBucket.to_json())

# convert the object into a dict
models_audit_log_histogram_bucket_dict = models_audit_log_histogram_bucket_instance.to_dict()
# create an instance of ModelsAuditLogHistogramBucket from a dict
models_audit_log_histogram_bucket_from_dict = ModelsAuditLogHistogramBucket.from_dict(models_audit_log_histogram_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


