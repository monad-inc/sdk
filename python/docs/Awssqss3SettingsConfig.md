# Awssqss3SettingsConfig

AWS SQS S3 settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compression** | **str** | Compression of S3 objects. oneof must mirror compression_handlers.ListCompressions(); TestCompressionFormatTagDrift guards drift. | 
**format** | **str** | Format of S3 objects. oneof must mirror format_handlers.ListFormats(); TestCompressionFormatTagDrift guards drift. csv is omitted because format_handlers&#39; package init wipes its Formats map after per-file inits register, so ListFormats() doesn&#39;t include csv today. | 
**key_filter** | [**SqsS3BaseKeyFilter**](SqsS3BaseKeyFilter.md) |  | [optional] 
**queue_url** | **str** |  | 
**record_location** | **str** | Record location within each parsed object. JSON only; empty &#x3D; whole record. | [optional] 
**region** | **str** |  | 
**role_arn** | **str** |  | [optional] 
**uses_sns** | **bool** |  | [optional] 
**with_metadata** | **bool** |  | [optional] 

## Example

```python
from monad.models.awssqss3_settings_config import Awssqss3SettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of Awssqss3SettingsConfig from a JSON string
awssqss3_settings_config_instance = Awssqss3SettingsConfig.from_json(json)
# print the JSON string representation of the object
print(Awssqss3SettingsConfig.to_json())

# convert the object into a dict
awssqss3_settings_config_dict = awssqss3_settings_config_instance.to_dict()
# create an instance of Awssqss3SettingsConfig from a dict
awssqss3_settings_config_from_dict = Awssqss3SettingsConfig.from_dict(awssqss3_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


