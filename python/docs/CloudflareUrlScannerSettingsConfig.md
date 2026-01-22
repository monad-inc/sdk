# CloudflareUrlScannerSettingsConfig

Cloudflare URL Scanner settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Cloudflare Account ID | [optional] 
**backfill_start_time** | **str** | Date to start fetching data from (RFC3339 format). Note: Historical data availability depends on your Cloudflare plan (Free: last 50 scans, Self Serve: 30 days, Enterprise: 12 months, Cloudforce One: unlimited) | [optional] 
**filter_my_scans** | **bool** | Filter to only show scans created by the current API token | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source | [optional] 

## Example

```python
from monad.models.cloudflare_url_scanner_settings_config import CloudflareUrlScannerSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareUrlScannerSettingsConfig from a JSON string
cloudflare_url_scanner_settings_config_instance = CloudflareUrlScannerSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareUrlScannerSettingsConfig.to_json())

# convert the object into a dict
cloudflare_url_scanner_settings_config_dict = cloudflare_url_scanner_settings_config_instance.to_dict()
# create an instance of CloudflareUrlScannerSettingsConfig from a dict
cloudflare_url_scanner_settings_config_from_dict = CloudflareUrlScannerSettingsConfig.from_dict(cloudflare_url_scanner_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


