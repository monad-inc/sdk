# BackblazeB2SettingsConfig

Backblaze B2 settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from | [optional] 
**bucket** | **str** | Name of the B2 bucket | [optional] 
**compression** | **str** | Compression format of the B2 objects | [optional] 
**format** | **str** | File format of the B2 objects | [optional] 
**partition_format** | **str** | Specifies the partition format of your B2 bucket | [optional] 
**prefix** | **str** | Prefix of the B2 object keys to read | [optional] 
**record_location** | **str** | Location of the record in the JSON object | [optional] 
**region** | **str** | B2 Region of your bucket (e.g., us-west-001, us-west-002, eu-central-003) | [optional] 

## Example

```python
from monad.models.backblaze_b2_settings_config import BackblazeB2SettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BackblazeB2SettingsConfig from a JSON string
backblaze_b2_settings_config_instance = BackblazeB2SettingsConfig.from_json(json)
# print the JSON string representation of the object
print(BackblazeB2SettingsConfig.to_json())

# convert the object into a dict
backblaze_b2_settings_config_dict = backblaze_b2_settings_config_instance.to_dict()
# create an instance of BackblazeB2SettingsConfig from a dict
backblaze_b2_settings_config_from_dict = BackblazeB2SettingsConfig.from_dict(backblaze_b2_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


