# PrometheusBasicVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**username** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.prometheus_basic_variant import PrometheusBasicVariant

# TODO update the JSON string below
json = "{}"
# create an instance of PrometheusBasicVariant from a JSON string
prometheus_basic_variant_instance = PrometheusBasicVariant.from_json(json)
# print the JSON string representation of the object
print(PrometheusBasicVariant.to_json())

# convert the object into a dict
prometheus_basic_variant_dict = prometheus_basic_variant_instance.to_dict()
# create an instance of PrometheusBasicVariant from a dict
prometheus_basic_variant_from_dict = PrometheusBasicVariant.from_dict(prometheus_basic_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


