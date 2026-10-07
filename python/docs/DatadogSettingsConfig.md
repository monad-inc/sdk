# DatadogSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ddsource** | **str** | The integration name associated with your log: the technology from which the log originated. When it matches an integration name, Datadog automatically installs the corresponding parsers and facets. | [optional] 
**ddtags** | **List[str]** | Tags associated with your logs. | [optional] 
**domain_url** | **str** | The base domain of the Datadog API (e.g., us5.datadoghq.com). Logs are sent to https://http-intake.logs.&lt;DOMAIN_URL&gt;/api/v2/logs | [optional] 
**hostname** | **str** | The name of the originating host of the log. | [optional] 
**service** | **str** | The name of the application or service generating the log events. It is used to switch from Logs to APM, so make sure you define the same value when you use both products. | [optional] 

## Example

```python
from monad.models.datadog_settings_config import DatadogSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DatadogSettingsConfig from a JSON string
datadog_settings_config_instance = DatadogSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DatadogSettingsConfig.to_json())

# convert the object into a dict
datadog_settings_config_dict = datadog_settings_config_instance.to_dict()
# create an instance of DatadogSettingsConfig from a dict
datadog_settings_config_from_dict = DatadogSettingsConfig.from_dict(datadog_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


