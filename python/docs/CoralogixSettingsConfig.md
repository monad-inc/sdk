# CoralogixSettingsConfig

Coralogix Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | ApplicationName is stamped on every record. Coralogix uses this to separate environments/tenants. | 
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**communication** | [**CoralogixCommunicationConfig**](CoralogixCommunicationConfig.md) |  | [optional] 
**region** | **str** | Coralogix region (e.g. us1, eu2). Determines which regional ingress hostname is used. See https://coralogix.com/docs/integrations/coralogix-endpoints/. | 
**subsystem_name** | **str** | SubsystemName is stamped on every record. Coralogix uses this to separate components within an application. | 
**timestamp_record_location** | **str** | TimestampRecordLocation is an optional JSONPath (&#x60;$.event.time&#x60;) or gjson path pointing at the timestamp field inside each incoming record. When unset the connector stamps the current time on every record; when set the connector reads the field and fails the batch if the value is not a parseable timestamp. | [optional] 

## Example

```python
from monad.models.coralogix_settings_config import CoralogixSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CoralogixSettingsConfig from a JSON string
coralogix_settings_config_instance = CoralogixSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CoralogixSettingsConfig.to_json())

# convert the object into a dict
coralogix_settings_config_dict = coralogix_settings_config_instance.to_dict()
# create an instance of CoralogixSettingsConfig from a dict
coralogix_settings_config_from_dict = CoralogixSettingsConfig.from_dict(coralogix_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


