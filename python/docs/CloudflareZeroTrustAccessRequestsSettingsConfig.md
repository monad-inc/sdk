# CloudflareZeroTrustAccessRequestsSettingsConfig

Cloudflare Zero Trust Access Requests settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Cloudflare Account ID | [optional] 
**backfill_start_time** | **str** | Date to start fetching data from (RFC3339 format) | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source | [optional] 

## Example

```python
from monad.models.cloudflare_zero_trust_access_requests_settings_config import CloudflareZeroTrustAccessRequestsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareZeroTrustAccessRequestsSettingsConfig from a JSON string
cloudflare_zero_trust_access_requests_settings_config_instance = CloudflareZeroTrustAccessRequestsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareZeroTrustAccessRequestsSettingsConfig.to_json())

# convert the object into a dict
cloudflare_zero_trust_access_requests_settings_config_dict = cloudflare_zero_trust_access_requests_settings_config_instance.to_dict()
# create an instance of CloudflareZeroTrustAccessRequestsSettingsConfig from a dict
cloudflare_zero_trust_access_requests_settings_config_from_dict = CloudflareZeroTrustAccessRequestsSettingsConfig.from_dict(cloudflare_zero_trust_access_requests_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


