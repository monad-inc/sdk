# GoogleCloudStorageSettingsConfig

Google Cloud Storage settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_name** | **str** | The name of the Google Cloud Storage bucket to use | [optional] 
**compression** | **str** | Compression format of the Google Cloud Storage objects. | [optional] 
**format** | **str** | The format of the files in the bucket, e.g., \&quot;json\&quot;, \&quot;csv\&quot;, etc. | [optional] 
**partition_format** | **str** | Specifies the partition format of your bucket. Select the option that matches how your data is currently organized. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization. | [optional] 
**prefix** | **str** | The prefix to use when reading from the bucket. This is used to filter objects in the bucket. | [optional] 
**project_id** | **str** | The Google Cloud project ID to use | [optional] 
**record_location** | **str** | Location of the record in the JSON object. Applies only if the format is JSON. | [optional] 

## Example

```python
from monad.models.google_cloud_storage_settings_config import GoogleCloudStorageSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudStorageSettingsConfig from a JSON string
google_cloud_storage_settings_config_instance = GoogleCloudStorageSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudStorageSettingsConfig.to_json())

# convert the object into a dict
google_cloud_storage_settings_config_dict = google_cloud_storage_settings_config_instance.to_dict()
# create an instance of GoogleCloudStorageSettingsConfig from a dict
google_cloud_storage_settings_config_from_dict = GoogleCloudStorageSettingsConfig.from_dict(google_cloud_storage_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


