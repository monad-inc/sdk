# LogAnalyticsQuerySettingsConfig

Microsoft Log Analytics Query settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | The date to start fetching data from on first sync | [optional] 
**ingestion_delay** | **int** | The ingestion delay in seconds for the data source | [optional] 
**query** | **str** | The query to run against the Log Analytics workspace | 
**rate_limit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 
**tenant_id** | **str** | The tenant ID of the Azure AD application | 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**workspace_id** | **str** | The workspace ID of the Log Analytics workspace | 

## Example

```python
from monad.models.log_analytics_query_settings_config import LogAnalyticsQuerySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LogAnalyticsQuerySettingsConfig from a JSON string
log_analytics_query_settings_config_instance = LogAnalyticsQuerySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(LogAnalyticsQuerySettingsConfig.to_json())

# convert the object into a dict
log_analytics_query_settings_config_dict = log_analytics_query_settings_config_instance.to_dict()
# create an instance of LogAnalyticsQuerySettingsConfig from a dict
log_analytics_query_settings_config_from_dict = LogAnalyticsQuerySettingsConfig.from_dict(log_analytics_query_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


