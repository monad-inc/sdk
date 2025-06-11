# GoogleCloudStorageOutputSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**bucket** | **str** | The name of the bucket where data will be stored | [optional] 
**compression** | **str** | The compression method to be applied to the data before storing | [optional] 
**format** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  | [optional] 
**partition_format** | **str** | Specifies the format for organizing data into partitions within your bucket. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). | [optional] 
**prefix** | **str** | An optional prefix for object keys to organize data within the bucket | [optional] 

## Example

```python
from monad.models.google_cloud_storage_output_settings_config import GoogleCloudStorageOutputSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudStorageOutputSettingsConfig from a JSON string
google_cloud_storage_output_settings_config_instance = GoogleCloudStorageOutputSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudStorageOutputSettingsConfig.to_json())

# convert the object into a dict
google_cloud_storage_output_settings_config_dict = google_cloud_storage_output_settings_config_instance.to_dict()
# create an instance of GoogleCloudStorageOutputSettingsConfig from a dict
google_cloud_storage_output_settings_config_from_dict = GoogleCloudStorageOutputSettingsConfig.from_dict(google_cloud_storage_output_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


