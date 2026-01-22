# CloudflareSecurityInsightsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Your Cloudflare account ID | [optional] 
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**exclude_issue_type** | **List[str]** | Filter to exclude specific issue types. Applied after the include filter. | [optional] 
**exclude_severity** | **List[str]** | Filter to exclude specific severity levels. Applied after the include filter. | [optional] 
**issue_type** | **List[str]** | Filter to include only specific issue types (compliance_violation, email_security, exposed_infrastructure, insecure_configuration, weak_authentication). If empty, all types are included. | [optional] 
**severity** | **List[str]** | Filter to include only specific severity levels (Low, Moderate, High, Critical). If empty, all severities are included. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.cloudflare_security_insights_settings_config import CloudflareSecurityInsightsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareSecurityInsightsSettingsConfig from a JSON string
cloudflare_security_insights_settings_config_instance = CloudflareSecurityInsightsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareSecurityInsightsSettingsConfig.to_json())

# convert the object into a dict
cloudflare_security_insights_settings_config_dict = cloudflare_security_insights_settings_config_instance.to_dict()
# create an instance of CloudflareSecurityInsightsSettingsConfig from a dict
cloudflare_security_insights_settings_config_from_dict = CloudflareSecurityInsightsSettingsConfig.from_dict(cloudflare_security_insights_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


