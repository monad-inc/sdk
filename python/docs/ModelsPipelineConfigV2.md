# ModelsPipelineConfigV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_id** | **str** |  | [optional] 
**component_tier** | **int** |  | [optional] 
**created_at** | **str** |  | [optional] 
**cron_schedule** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**edges** | [**List[ModelsPipelineEdge]**](ModelsPipelineEdge.md) |  | [optional] 
**enabled** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**is_synthetic** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**next_cron_run_at** | **str** |  | [optional] 
**nodes** | [**List[ModelsPipelineNode]**](ModelsPipelineNode.md) |  | [optional] 
**organization_id** | **str** |  | [optional] 
**organization_name** | **str** |  | [optional] 
**retention_policy** | [**ModelsPipelineRetentionPolicy**](ModelsPipelineRetentionPolicy.md) |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_pipeline_config_v2 import ModelsPipelineConfigV2

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineConfigV2 from a JSON string
models_pipeline_config_v2_instance = ModelsPipelineConfigV2.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineConfigV2.to_json())

# convert the object into a dict
models_pipeline_config_v2_dict = models_pipeline_config_v2_instance.to_dict()
# create an instance of ModelsPipelineConfigV2 from a dict
models_pipeline_config_v2_from_dict = ModelsPipelineConfigV2.from_dict(models_pipeline_config_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


