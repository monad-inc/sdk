# CloudflareUsersSettingsConfig

Cloudflare Users settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Cloudflare account ID (required path parameter) | [optional] 
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.cloudflare_users_settings_config import CloudflareUsersSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareUsersSettingsConfig from a JSON string
cloudflare_users_settings_config_instance = CloudflareUsersSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareUsersSettingsConfig.to_json())

# convert the object into a dict
cloudflare_users_settings_config_dict = cloudflare_users_settings_config_instance.to_dict()
# create an instance of CloudflareUsersSettingsConfig from a dict
cloudflare_users_settings_config_from_dict = CloudflareUsersSettingsConfig.from_dict(cloudflare_users_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


