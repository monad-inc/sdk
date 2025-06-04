# ObjectStorageSettingsConfig

Object Storage Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**bucket** | **str** | The name of the object storage bucket where data will be stored | [optional] 
**compression** | **str** | The compression method to be applied to the data before storing | [optional] 
**endpoint** | **str** | The endpoint URL for the object storage service (e.g., https://fly.storage.tigris.dev, https://minio.example.com) | [optional] 
**format_config** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  | [optional] 
**partition_format** | **str** | Specifies the format for organizing data into partitions within your bucket. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). | [optional] 
**prefix** | **str** | An optional prefix for object keys to organize data within the bucket | [optional] 
**region** | **str** | The region for the object storage service (optional for some providers) | [optional] 
**skip_ssl_verification** | **bool** | Whether to skip SSL certificate verification (useful for self-signed certificates or development environments) | [optional] 
**use_path_style** | **bool** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. | [optional] 

## Example

```python
from monad.models.object_storage_settings_config import ObjectStorageSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectStorageSettingsConfig from a JSON string
object_storage_settings_config_instance = ObjectStorageSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ObjectStorageSettingsConfig.to_json())

# convert the object into a dict
object_storage_settings_config_dict = object_storage_settings_config_instance.to_dict()
# create an instance of ObjectStorageSettingsConfig from a dict
object_storage_settings_config_from_dict = ObjectStorageSettingsConfig.from_dict(object_storage_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


