# RoutesV2PipelineRoutingDrop


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dropped_bytes** | **int** |  | [optional] 
**dropped_gb** | **float** |  | [optional] 
**input_id** | **str** |  | [optional] 
**pipeline_id** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_pipeline_routing_drop import RoutesV2PipelineRoutingDrop

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2PipelineRoutingDrop from a JSON string
routes_v2_pipeline_routing_drop_instance = RoutesV2PipelineRoutingDrop.from_json(json)
# print the JSON string representation of the object
print(RoutesV2PipelineRoutingDrop.to_json())

# convert the object into a dict
routes_v2_pipeline_routing_drop_dict = routes_v2_pipeline_routing_drop_instance.to_dict()
# create an instance of RoutesV2PipelineRoutingDrop from a dict
routes_v2_pipeline_routing_drop_from_dict = RoutesV2PipelineRoutingDrop.from_dict(routes_v2_pipeline_routing_drop_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


