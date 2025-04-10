# BigqueryInputSettingsConfig

BigQuery Input Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron string for scheduling the ingest of your input | [optional] 
**dataset** | **str** | The BigQuery dataset ID containing the table | [optional] 
**project** | **str** | The GCP project ID containing the BigQuery dataset | [optional] 
**query** | **str** | Optional custom query to use instead of table (must include timestamp_column) | [optional] 
**table** | **str** | The BigQuery table ID to query data from | [optional] 
**timestamp_column** | **str** | The column containing timestamp values used for incremental loading | [optional] 

## Example

```python
from monad.models.bigquery_input_settings_config import BigqueryInputSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BigqueryInputSettingsConfig from a JSON string
bigquery_input_settings_config_instance = BigqueryInputSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(BigqueryInputSettingsConfig.to_json())

# convert the object into a dict
bigquery_input_settings_config_dict = bigquery_input_settings_config_instance.to_dict()
# create an instance of BigqueryInputSettingsConfig from a dict
bigquery_input_settings_config_from_dict = BigqueryInputSettingsConfig.from_dict(bigquery_input_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


