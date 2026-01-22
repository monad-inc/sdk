# CloudflareFirewallEventsSettingsConfig

Cloudflare Firewall Events settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_bot_fields** | **bool** | Include Bot Management fields (requires Enterprise plan with Bot Management add-on) | [optional] 
**lookback_duration** | **str** | Initial lookback duration for first sync (e.g., \&quot;24h\&quot;, \&quot;7d\&quot;). Respects API retention limits. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**zone_id** | **str** | Cloudflare Zone ID | [optional] 

## Example

```python
from monad.models.cloudflare_firewall_events_settings_config import CloudflareFirewallEventsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareFirewallEventsSettingsConfig from a JSON string
cloudflare_firewall_events_settings_config_instance = CloudflareFirewallEventsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareFirewallEventsSettingsConfig.to_json())

# convert the object into a dict
cloudflare_firewall_events_settings_config_dict = cloudflare_firewall_events_settings_config_instance.to_dict()
# create an instance of CloudflareFirewallEventsSettingsConfig from a dict
cloudflare_firewall_events_settings_config_from_dict = CloudflareFirewallEventsSettingsConfig.from_dict(cloudflare_firewall_events_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


