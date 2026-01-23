# CloudflareHttpRequestsSettingsConfig

Cloudflare HTTP Requests settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **List[str]** | Fields to include in the query. Leave empty to use default curated list. Only fields available to your account will be included (validated against API). Maximum 50 fields due to API constraints. | [optional] 
**lookback_duration** | **str** | Initial lookback duration for first sync (e.g., \&quot;24h\&quot;, \&quot;7d\&quot;). Respects API retention limits. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**zone_id** | **str** | Cloudflare Zone ID | [optional] 

## Example

```python
from monad.models.cloudflare_http_requests_settings_config import CloudflareHttpRequestsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareHttpRequestsSettingsConfig from a JSON string
cloudflare_http_requests_settings_config_instance = CloudflareHttpRequestsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareHttpRequestsSettingsConfig.to_json())

# convert the object into a dict
cloudflare_http_requests_settings_config_dict = cloudflare_http_requests_settings_config_instance.to_dict()
# create an instance of CloudflareHttpRequestsSettingsConfig from a dict
cloudflare_http_requests_settings_config_from_dict = CloudflareHttpRequestsSettingsConfig.from_dict(cloudflare_http_requests_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


