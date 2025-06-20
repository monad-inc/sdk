# AbsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_url** | **str** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. | [optional] 
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**compression** | **str** | The compression method to be applied to the data before storing in Azure | [optional] 
**container** | **str** | A container organizes a set of blobs, similar to a directory in a file system. | [optional] 
**format_config** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  | [optional] 
**partition_format** | **str** | Specifies the format for organizing data into partitions within your Azure container. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). | [optional] 
**prefix** | **str** | An optional prefix for Azure object keys to organize data within the container | [optional] 

## Example

```python
from monad.models.abs_settings_config import AbsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AbsSettingsConfig from a JSON string
abs_settings_config_instance = AbsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AbsSettingsConfig.to_json())

# convert the object into a dict
abs_settings_config_dict = abs_settings_config_instance.to_dict()
# create an instance of AbsSettingsConfig from a dict
abs_settings_config_from_dict = AbsSettingsConfig.from_dict(abs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


