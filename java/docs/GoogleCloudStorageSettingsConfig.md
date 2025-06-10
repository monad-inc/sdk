

# GoogleCloudStorageSettingsConfig

Google Cloud Storage settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**bucketName** | **String** | The name of the Google Cloud Storage bucket to use |  [optional] |
|**compression** | **String** | Compression format of the Google Cloud Storage objects. |  [optional] |
|**format** | **String** | The format of the files in the bucket, e.g., \&quot;json\&quot;, \&quot;csv\&quot;, etc. |  [optional] |
|**partitionFormat** | **String** | Specifies the partition format of your bucket. Select the option that matches how your data is currently organized. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization. |  [optional] |
|**prefix** | **String** | The prefix to use when reading from the bucket. This is used to filter objects in the bucket. |  [optional] |
|**projectId** | **String** | The Google Cloud project ID to use |  [optional] |
|**recordLocation** | **String** | Location of the record in the JSON object. Applies only if the format is JSON. |  [optional] |



