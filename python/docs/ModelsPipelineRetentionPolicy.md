# ModelsPipelineRetentionPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_age_limit** | **int** |  | [optional] 
**stream_replicas** | **int** |  | [optional] 
**stream_size_limit** | [**ResourceQuantity**](ResourceQuantity.md) |  | [optional] 

## Example

```python
from monad.models.models_pipeline_retention_policy import ModelsPipelineRetentionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineRetentionPolicy from a JSON string
models_pipeline_retention_policy_instance = ModelsPipelineRetentionPolicy.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineRetentionPolicy.to_json())

# convert the object into a dict
models_pipeline_retention_policy_dict = models_pipeline_retention_policy_instance.to_dict()
# create an instance of ModelsPipelineRetentionPolicy from a dict
models_pipeline_retention_policy_from_dict = ModelsPipelineRetentionPolicy.from_dict(models_pipeline_retention_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


