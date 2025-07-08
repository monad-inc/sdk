

# AzureBlobStorageSettingsConfig


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**accountUrl** | **String** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. |  [optional] |
|**compression** | **String** | The compression format of objects in the Azure container |  [optional] |
|**container** | **String** | A container organizes a set of blobs, similar to a directory in a file system. |  [optional] |
|**format** | **String** | File format of the Blob storage objects in Azure. |  [optional] |
|**partitionFormat** | **String** | Specifies the format for organizing data into partitions within your Azure container. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). |  [optional] |
|**prefix** | **String** | An optional prefix for Azure object keys to organize data within the container |  [optional] |
|**recordLocation** | **String** | Location of the record in the JSON object. Applies only if the format is JSON. |  [optional] |



