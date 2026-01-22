# CloudflareZonesSettingsConfig

Cloudflare Zones settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.cloudflare_zones_settings_config import CloudflareZonesSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareZonesSettingsConfig from a JSON string
cloudflare_zones_settings_config_instance = CloudflareZonesSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareZonesSettingsConfig.to_json())

# convert the object into a dict
cloudflare_zones_settings_config_dict = cloudflare_zones_settings_config_instance.to_dict()
# create an instance of CloudflareZonesSettingsConfig from a dict
cloudflare_zones_settings_config_from_dict = CloudflareZonesSettingsConfig.from_dict(cloudflare_zones_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


