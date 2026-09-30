# GoogleCloudStorageSettingsConfig

Google Cloud Storage settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, no past objects are fetched and ingestion starts from now. | [optional] 
**bucket_name** | **str** | The name of the Google Cloud Storage bucket to use | 
**compression** | **str** | Compression format of the Google Cloud Storage objects. | 
**cron** | **str** | Optional cron schedule to control polling cadence. Blank keeps the default continuous polling. | [optional] 
**format** | **str** | The format of the files in the bucket, e.g., \&quot;json\&quot;, \&quot;csv\&quot;, etc. | 
**partition_format** | **str** | Partition format of your bucket. Options: hive compliant (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;), flat hive compliant (&#39;dt&#x3D;2024-01-01&#39;), or simple date (&#39;2024/01/01&#39;). | 
**prefix** | **str** | The prefix to use when reading from the bucket. This is used to filter objects in the bucket. | [optional] 
**project_id** | **str** | The Google Cloud project ID to use | 
**rate_limit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 
**record_location** | **str** | Location of the record in the object. Applies only for JSON objects. Leave empty for the entire record. | [optional] 

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


