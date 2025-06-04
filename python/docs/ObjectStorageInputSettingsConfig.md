# ObjectStorageInputSettingsConfig

Object storage settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Name of the storage bucket | [optional] 
**compression** | **str** | Compression format of the objects | [optional] 
**endpoint** | **str** | Endpoint URL for the object storage service (e.g., https://minio.example.com, https://s3.amazonaws.com) | [optional] 
**format** | **str** | File format of the objects | [optional] 
**partition_format** | **str** | Specifies the partition format of your bucket. Select the option that matches how your data is currently organized. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization. | [optional] 
**prefix** | **str** | Prefix that leads to the start of the expected partition. For example: \&quot;/foobar/year&#x3D;2024/month&#x3D;01/day&#x3D;01/\&quot;. The prefix is &#x60;foobar&#x60;. | [optional] 
**record_location** | **str** | Location of the record in the JSON object. This can be ignored if the record is not in JSON format. If the records are not nested in the JSON, you can use &#39;@this&#39; to indicate that the file contains the record at the root or an array of records. | [optional] 
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


