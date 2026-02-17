# RoutesV2PipelineWithStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**last_ingested_time** | **str** |  | [optional] 
**status** | **str** |  | 

## Example

```python
from monad.models.routes_v2_pipeline_with_status import RoutesV2PipelineWithStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2PipelineWithStatus from a JSON string
routes_v2_pipeline_with_status_instance = RoutesV2PipelineWithStatus.from_json(json)
# print the JSON string representation of the object
print(RoutesV2PipelineWithStatus.to_json())

# convert the object into a dict
routes_v2_pipeline_with_status_dict = routes_v2_pipeline_with_status_instance.to_dict()
# create an instance of RoutesV2PipelineWithStatus from a dict
routes_v2_pipeline_with_status_from_dict = RoutesV2PipelineWithStatus.from_dict(routes_v2_pipeline_with_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


