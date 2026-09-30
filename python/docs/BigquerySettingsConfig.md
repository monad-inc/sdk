# BigquerySettingsConfig

BigQuery Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | The name of the BigQuery dataset where the table resides | [optional] 
**project_id** | **str** | The Google Cloud Project ID where the BigQuery instance is located | [optional] 
**table** | **str** | The name of the table where the data will be written | [optional] 

## Example

```python
from monad.models.bigquery_settings_config import BigquerySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BigquerySettingsConfig from a JSON string
bigquery_settings_config_instance = BigquerySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(BigquerySettingsConfig.to_json())

# convert the object into a dict
bigquery_settings_config_dict = bigquery_settings_config_instance.to_dict()
# create an instance of BigquerySettingsConfig from a dict
bigquery_settings_config_from_dict = BigquerySettingsConfig.from_dict(bigquery_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


