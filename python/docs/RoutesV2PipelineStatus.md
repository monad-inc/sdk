# RoutesV2PipelineStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egress** | [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**ingress** | [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**pipeline_id** | **str** |  | 
**pipeline_name** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from monad.models.routes_v2_pipeline_status import RoutesV2PipelineStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2PipelineStatus from a JSON string
routes_v2_pipeline_status_instance = RoutesV2PipelineStatus.from_json(json)
# print the JSON string representation of the object
print(RoutesV2PipelineStatus.to_json())

# convert the object into a dict
routes_v2_pipeline_status_dict = routes_v2_pipeline_status_instance.to_dict()
# create an instance of RoutesV2PipelineStatus from a dict
routes_v2_pipeline_status_from_dict = RoutesV2PipelineStatus.from_dict(routes_v2_pipeline_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


