# GoogleSecopsSettingsConfig

Google SecOps (Chronicle) Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**collection_time_path** | **str** |  | 
**compress** | **bool** |  | [optional] 
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | 
**endpoint** | **str** |  | [optional] 
**environment_namespace** | **str** |  | [optional] 
**forwarder** | **str** |  | [optional] 
**instance_id** | **str** |  | 
**log_entry_time_path** | **str** |  | 
**log_type** | **str** |  | 
**project_id** | **str** |  | 
**region** | **str** |  | 

## Example

```python
from monad.models.google_secops_settings_config import GoogleSecopsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecopsSettingsConfig from a JSON string
google_secops_settings_config_instance = GoogleSecopsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleSecopsSettingsConfig.to_json())

# convert the object into a dict
google_secops_settings_config_dict = google_secops_settings_config_instance.to_dict()
# create an instance of GoogleSecopsSettingsConfig from a dict
google_secops_settings_config_from_dict = GoogleSecopsSettingsConfig.from_dict(google_secops_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


