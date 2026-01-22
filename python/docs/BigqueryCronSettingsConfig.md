# BigqueryCronSettingsConfig

BigQuery Input Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron string for scheduling the ingest of your input | [optional] 
**dataset** | **str** | The BigQuery dataset ID containing the table | [optional] 
**project** | **str** | The GCP project ID containing the BigQuery dataset | [optional] 
**query** | **str** | Optional custom query to use instead of table | [optional] 
**table** | **str** | The BigQuery table ID to query data from | [optional] 

## Example

```python
from monad.models.bigquery_cron_settings_config import BigqueryCronSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BigqueryCronSettingsConfig from a JSON string
bigquery_cron_settings_config_instance = BigqueryCronSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(BigqueryCronSettingsConfig.to_json())

# convert the object into a dict
bigquery_cron_settings_config_dict = bigquery_cron_settings_config_instance.to_dict()
# create an instance of BigqueryCronSettingsConfig from a dict
bigquery_cron_settings_config_from_dict = BigqueryCronSettingsConfig.from_dict(bigquery_cron_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


