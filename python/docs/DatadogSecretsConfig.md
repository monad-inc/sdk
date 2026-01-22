# DatadogSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.datadog_secrets_config import DatadogSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DatadogSecretsConfig from a JSON string
datadog_secrets_config_instance = DatadogSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(DatadogSecretsConfig.to_json())

# convert the object into a dict
datadog_secrets_config_dict = datadog_secrets_config_instance.to_dict()
# create an instance of DatadogSecretsConfig from a dict
datadog_secrets_config_from_dict = DatadogSecretsConfig.from_dict(datadog_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


