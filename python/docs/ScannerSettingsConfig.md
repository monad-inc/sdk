# ScannerSettingsConfig

Scanner S3 Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth** | [**ScannerAuthConfig**](ScannerAuthConfig.md) |  | [optional] 
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**bucket** | **str** | The S3 bucket in your AWS account that Scanner indexes. | 
**compression** | **str** | Compression applied before upload. Scanner indexes both uncompressed and gzip objects. | 
**format** | [**ScannerFormatConfig**](ScannerFormatConfig.md) |  | [optional] 
**partition_format** | **str** | Directory structure used to partition stored objects. | [optional] 
**prefix** | **str** | Optional prefix for S3 object keys. Should match the prefix on the Scanner source. | [optional] 
**region** | **str** | The AWS region where the S3 bucket is located. | 

## Example

```python
from monad.models.scanner_settings_config import ScannerSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ScannerSettingsConfig from a JSON string
scanner_settings_config_instance = ScannerSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ScannerSettingsConfig.to_json())

# convert the object into a dict
scanner_settings_config_dict = scanner_settings_config_instance.to_dict()
# create an instance of ScannerSettingsConfig from a dict
scanner_settings_config_from_dict = ScannerSettingsConfig.from_dict(scanner_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


