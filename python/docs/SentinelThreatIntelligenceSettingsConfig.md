# SentinelThreatIntelligenceSettingsConfig

Microsoft Sentinel Threat Intelligence Upload API Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The application (client) ID registered in Microsoft Entra. | 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**source_system** | **str** | Free-form label identifying the source system in Sentinel. Must NOT be \&quot;Microsoft Sentinel\&quot; — that value is restricted by the API. | 
**tenant_id** | **str** | The Microsoft Entra tenant (directory) ID. | 
**workspace_id** | **str** | The Log Analytics workspace ID (GUID) that will store the STIX objects. | 

## Example

```python
from monad.models.sentinel_threat_intelligence_settings_config import SentinelThreatIntelligenceSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SentinelThreatIntelligenceSettingsConfig from a JSON string
sentinel_threat_intelligence_settings_config_instance = SentinelThreatIntelligenceSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SentinelThreatIntelligenceSettingsConfig.to_json())

# convert the object into a dict
sentinel_threat_intelligence_settings_config_dict = sentinel_threat_intelligence_settings_config_instance.to_dict()
# create an instance of SentinelThreatIntelligenceSettingsConfig from a dict
sentinel_threat_intelligence_settings_config_from_dict = SentinelThreatIntelligenceSettingsConfig.from_dict(sentinel_threat_intelligence_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


