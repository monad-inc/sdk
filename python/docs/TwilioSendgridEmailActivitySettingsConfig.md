# TwilioSendgridEmailActivitySettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.twilio_sendgrid_email_activity_settings_config import TwilioSendgridEmailActivitySettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TwilioSendgridEmailActivitySettingsConfig from a JSON string
twilio_sendgrid_email_activity_settings_config_instance = TwilioSendgridEmailActivitySettingsConfig.from_json(json)
# print the JSON string representation of the object
print(TwilioSendgridEmailActivitySettingsConfig.to_json())

# convert the object into a dict
twilio_sendgrid_email_activity_settings_config_dict = twilio_sendgrid_email_activity_settings_config_instance.to_dict()
# create an instance of TwilioSendgridEmailActivitySettingsConfig from a dict
twilio_sendgrid_email_activity_settings_config_from_dict = TwilioSendgridEmailActivitySettingsConfig.from_dict(twilio_sendgrid_email_activity_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


