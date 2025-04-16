# RoutesV2MetricsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egress_bytes** | [**List[RoutesV2PipelineMetric]**](RoutesV2PipelineMetric.md) |  | [optional] 
**ingress_bytes** | [**List[RoutesV2PipelineMetric]**](RoutesV2PipelineMetric.md) |  | [optional] 

## Example

```python
from monad.models.routes_v2_metrics_response import RoutesV2MetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2MetricsResponse from a JSON string
routes_v2_metrics_response_instance = RoutesV2MetricsResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV2MetricsResponse.to_json())

# convert the object into a dict
routes_v2_metrics_response_dict = routes_v2_metrics_response_instance.to_dict()
# create an instance of RoutesV2MetricsResponse from a dict
routes_v2_metrics_response_from_dict = RoutesV2MetricsResponse.from_dict(routes_v2_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


