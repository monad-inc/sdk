# CloudflareDdosAttackAnalyticsSettingsConfig

Cloudflare DDoS Attack Analytics settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Cloudflare Account ID | [optional] 
**backfill_start_time** | **str** | The date to start fetching data from (RFC3339 format). If not specified, fetches all available data within API retention limits. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.cloudflare_ddos_attack_analytics_settings_config import CloudflareDdosAttackAnalyticsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareDdosAttackAnalyticsSettingsConfig from a JSON string
cloudflare_ddos_attack_analytics_settings_config_instance = CloudflareDdosAttackAnalyticsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareDdosAttackAnalyticsSettingsConfig.to_json())

# convert the object into a dict
cloudflare_ddos_attack_analytics_settings_config_dict = cloudflare_ddos_attack_analytics_settings_config_instance.to_dict()
# create an instance of CloudflareDdosAttackAnalyticsSettingsConfig from a dict
cloudflare_ddos_attack_analytics_settings_config_from_dict = CloudflareDdosAttackAnalyticsSettingsConfig.from_dict(cloudflare_ddos_attack_analytics_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


