# AzureBlobStorageSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_url** | **str** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. | [optional] 
**compression** | **str** | The compression format of objects in the Azure container | [optional] 
**container** | **str** | A container organizes a set of blobs, similar to a directory in a file system. | [optional] 
**format** | **str** | File format of the Blob storage objects in Azure. | [optional] 
**partition_format** | **str** | Specifies the format for organizing data into partitions within your Azure container. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). | [optional] 
**prefix** | **str** | An optional prefix for Azure object keys to organize data within the container | [optional] 

## Example

```python
from monad.models.azure_blob_storage_settings_config import AzureBlobStorageSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlobStorageSettingsConfig from a JSON string
azure_blob_storage_settings_config_instance = AzureBlobStorageSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AzureBlobStorageSettingsConfig.to_json())

# convert the object into a dict
azure_blob_storage_settings_config_dict = azure_blob_storage_settings_config_instance.to_dict()
# create an instance of AzureBlobStorageSettingsConfig from a dict
azure_blob_storage_settings_config_from_dict = AzureBlobStorageSettingsConfig.from_dict(azure_blob_storage_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


