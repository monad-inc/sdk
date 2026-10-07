# PrometheusAuthConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic** | [**PrometheusBasicVariant**](PrometheusBasicVariant.md) |  | [optional] 
**bearer** | [**PrometheusBearerVariant**](PrometheusBearerVariant.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.prometheus_auth_config import PrometheusAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PrometheusAuthConfig from a JSON string
prometheus_auth_config_instance = PrometheusAuthConfig.from_json(json)
# print the JSON string representation of the object
print(PrometheusAuthConfig.to_json())

# convert the object into a dict
prometheus_auth_config_dict = prometheus_auth_config_instance.to_dict()
# create an instance of PrometheusAuthConfig from a dict
prometheus_auth_config_from_dict = PrometheusAuthConfig.from_dict(prometheus_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


