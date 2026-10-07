# PrometheusSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth** | [**PrometheusAuthConfig**](PrometheusAuthConfig.md) |  | [optional] 
**endpoint** | **str** |  | [optional] 
**label_fields** | **List[str]** |  | [optional] 
**metric_name** | [**PrometheusMetricNameConfig**](PrometheusMetricNameConfig.md) |  | [optional] 
**timestamp_field** | **str** |  | [optional] 
**tls_skip_verify** | **bool** |  | [optional] 
**value_field** | **str** |  | [optional] 

## Example

```python
from monad.models.prometheus_settings_config import PrometheusSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PrometheusSettingsConfig from a JSON string
prometheus_settings_config_instance = PrometheusSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(PrometheusSettingsConfig.to_json())

# convert the object into a dict
prometheus_settings_config_dict = prometheus_settings_config_instance.to_dict()
# create an instance of PrometheusSettingsConfig from a dict
prometheus_settings_config_from_dict = PrometheusSettingsConfig.from_dict(prometheus_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


