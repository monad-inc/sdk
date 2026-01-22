# CustomerEventDataSettingsConfig

Docusign Customer Event Data settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from in RFC3339 format. If not specified, a full sync of data upto now would be performed on the first sync (since the previous 7 days). You must specify a backfill time to query for data for a time before 7 days. All syncs thereafter will be incremental. | [optional] 
**environment** | **str** | Determines the URI {environment}.docusign.com | [optional] 
**user_id** | **str** | User id of the Docusign admin | [optional] 

## Example

```python
from monad.models.customer_event_data_settings_config import CustomerEventDataSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerEventDataSettingsConfig from a JSON string
customer_event_data_settings_config_instance = CustomerEventDataSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CustomerEventDataSettingsConfig.to_json())

# convert the object into a dict
customer_event_data_settings_config_dict = customer_event_data_settings_config_instance.to_dict()
# create an instance of CustomerEventDataSettingsConfig from a dict
customer_event_data_settings_config_from_dict = CustomerEventDataSettingsConfig.from_dict(customer_event_data_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


