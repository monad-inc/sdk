# PrometheusFieldMetricVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_name** | **str** |  | [optional] 

## Example

```python
from monad.models.prometheus_field_metric_variant import PrometheusFieldMetricVariant

# TODO update the JSON string below
json = "{}"
# create an instance of PrometheusFieldMetricVariant from a JSON string
prometheus_field_metric_variant_instance = PrometheusFieldMetricVariant.from_json(json)
# print the JSON string representation of the object
print(PrometheusFieldMetricVariant.to_json())

# convert the object into a dict
prometheus_field_metric_variant_dict = prometheus_field_metric_variant_instance.to_dict()
# create an instance of PrometheusFieldMetricVariant from a dict
prometheus_field_metric_variant_from_dict = PrometheusFieldMetricVariant.from_dict(prometheus_field_metric_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


