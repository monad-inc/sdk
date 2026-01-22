# CloudflareRulesetsSettingsConfig

Cloudflare Rulesets settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Your Cloudflare account ID (for account-level rulesets). Required if ZoneIDs is not specified. | [optional] 
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**zone_ids** | **List[str]** | List of zone IDs (for zone-level rulesets). If empty and AccountID is not specified, fetches from all zones. | [optional] 

## Example

```python
from monad.models.cloudflare_rulesets_settings_config import CloudflareRulesetsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareRulesetsSettingsConfig from a JSON string
cloudflare_rulesets_settings_config_instance = CloudflareRulesetsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareRulesetsSettingsConfig.to_json())

# convert the object into a dict
cloudflare_rulesets_settings_config_dict = cloudflare_rulesets_settings_config_instance.to_dict()
# create an instance of CloudflareRulesetsSettingsConfig from a dict
cloudflare_rulesets_settings_config_from_dict = CloudflareRulesetsSettingsConfig.from_dict(cloudflare_rulesets_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


