# CloudflareDnsRecordsSettingsConfig

Cloudflare DNS Records settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**zone_ids** | **List[str]** | Optional list of specific zone IDs to fetch DNS records from. If empty, fetches from all zones. | [optional] 

## Example

```python
from monad.models.cloudflare_dns_records_settings_config import CloudflareDnsRecordsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareDnsRecordsSettingsConfig from a JSON string
cloudflare_dns_records_settings_config_instance = CloudflareDnsRecordsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareDnsRecordsSettingsConfig.to_json())

# convert the object into a dict
cloudflare_dns_records_settings_config_dict = cloudflare_dns_records_settings_config_instance.to_dict()
# create an instance of CloudflareDnsRecordsSettingsConfig from a dict
cloudflare_dns_records_settings_config_from_dict = CloudflareDnsRecordsSettingsConfig.from_dict(cloudflare_dns_records_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


