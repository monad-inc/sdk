# BackblazeSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**bucket** | **str** | The name of the B2 bucket where data will be stored | [optional] 
**compression** | **str** | The compression method to be applied to the data before storing in B2 | [optional] 
**format_config** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  | [optional] 
**partition_format** | **str** | Specifies the format for organizing data into partitions | [optional] 
**prefix** | **str** | An optional prefix for B2 object keys to organize data within the bucket | [optional] 
**region** | **str** | The B2 region/endpoint (e.g., us-west-001) | [optional] 

## Example

```python
from monad.models.backblaze_settings_config import BackblazeSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BackblazeSettingsConfig from a JSON string
backblaze_settings_config_instance = BackblazeSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(BackblazeSettingsConfig.to_json())

# convert the object into a dict
backblaze_settings_config_dict = backblaze_settings_config_instance.to_dict()
# create an instance of BackblazeSettingsConfig from a dict
backblaze_settings_config_from_dict = BackblazeSettingsConfig.from_dict(backblaze_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


