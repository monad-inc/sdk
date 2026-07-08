# ObjectStorageInputSettingsConfig

Object storage settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Name of the storage bucket | 
**compression** | **str** | Compression format of the objects | 
**endpoint** | **str** | Endpoint URL for the object storage service (e.g., https://minio.example.com, https://s3.amazonaws.com) | 
**format** | **str** | File format of the objects | 
**partition_format** | **str** | Partition format of your bucket. Options: hive compliant (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;), flat hive compliant (&#39;dt&#x3D;2024-01-01&#39;), or simple date (&#39;2024/01/01&#39;). | [optional] 
**prefix** | **str** | Prefix that leads to the start of the expected partition. For example: \&quot;/foobar/year&#x3D;2024/month&#x3D;01/day&#x3D;01/\&quot;. The prefix is &#x60;foobar&#x60;. | [optional] 
**record_location** | **str** | Location of the record in the object. Applies only for JSON objects. Leave empty for the entire record. | [optional] 
**region** | **str** | Optional region for the object storage service. This is often required for services like AWS S3. | [optional] 
**skip_ssl_verification** | **bool** | Skip SSL verification for self-signed certificates | [optional] 
**use_path_style** | **bool** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. | [optional] 

## Example

```python
from monad.models.object_storage_input_settings_config import ObjectStorageInputSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectStorageInputSettingsConfig from a JSON string
object_storage_input_settings_config_instance = ObjectStorageInputSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ObjectStorageInputSettingsConfig.to_json())

# convert the object into a dict
object_storage_input_settings_config_dict = object_storage_input_settings_config_instance.to_dict()
# create an instance of ObjectStorageInputSettingsConfig from a dict
object_storage_input_settings_config_from_dict = ObjectStorageInputSettingsConfig.from_dict(object_storage_input_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


