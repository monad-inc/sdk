# EventSettingsConfig

CrowdStrike EDR event stream settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_name** | **str** | The application name monad uses to connect to the CrowdStrike data stream. It&#39;s important that this name is unique to avoid conflicts with other applications connecting to the same stream. You&#39;re advised to use a unique identifier for this application. For example, if you have 2 stream input connections they should not both be named &#39;monad&#39;. | [optional] 
**cloud** | **str** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**member_cid** | **str** | In environments where an entity (like an MSSP) manages security for multiple clients, each client is typically assigned a unique CID. This identifier allows the managing entity to access and operate within the specific customer&#39;s environment. This is crucial for scenarios where operational isolation between different clients&#39; data and configurations is necessary. | [optional] 

## Example

```python
from monad.models.event_settings_config import EventSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EventSettingsConfig from a JSON string
event_settings_config_instance = EventSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(EventSettingsConfig.to_json())

# convert the object into a dict
event_settings_config_dict = event_settings_config_instance.to_dict()
# create an instance of EventSettingsConfig from a dict
event_settings_config_from_dict = EventSettingsConfig.from_dict(event_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


