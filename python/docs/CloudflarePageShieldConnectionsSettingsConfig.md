# CloudflarePageShieldConnectionsSettingsConfig

Cloudflare Page Shield Connections settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**exclude_cdn_cgi** | **bool** | Exclude connections to Cloudflare /cdn-cgi paths. Default: true | [optional] 
**status** | **str** | Filter connections by status: \&quot;active\&quot;, \&quot;infrequent\&quot;, or \&quot;inactive\&quot;. Default: \&quot;active\&quot; | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**zone_ids** | **List[str]** | Optional list of specific zone IDs to fetch connections from. If empty, fetches from all zones. | [optional] 

## Example

```python
from monad.models.cloudflare_page_shield_connections_settings_config import CloudflarePageShieldConnectionsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflarePageShieldConnectionsSettingsConfig from a JSON string
cloudflare_page_shield_connections_settings_config_instance = CloudflarePageShieldConnectionsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflarePageShieldConnectionsSettingsConfig.to_json())

# convert the object into a dict
cloudflare_page_shield_connections_settings_config_dict = cloudflare_page_shield_connections_settings_config_instance.to_dict()
# create an instance of CloudflarePageShieldConnectionsSettingsConfig from a dict
cloudflare_page_shield_connections_settings_config_from_dict = CloudflarePageShieldConnectionsSettingsConfig.from_dict(cloudflare_page_shield_connections_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


