# PrometheusMetricNameConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | [**PrometheusFieldMetricVariant**](PrometheusFieldMetricVariant.md) |  | [optional] 
**static** | [**PrometheusStaticMetricVariant**](PrometheusStaticMetricVariant.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.prometheus_metric_name_config import PrometheusMetricNameConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PrometheusMetricNameConfig from a JSON string
prometheus_metric_name_config_instance = PrometheusMetricNameConfig.from_json(json)
# print the JSON string representation of the object
print(PrometheusMetricNameConfig.to_json())

# convert the object into a dict
prometheus_metric_name_config_dict = prometheus_metric_name_config_instance.to_dict()
# create an instance of PrometheusMetricNameConfig from a dict
prometheus_metric_name_config_from_dict = PrometheusMetricNameConfig.from_dict(prometheus_metric_name_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


