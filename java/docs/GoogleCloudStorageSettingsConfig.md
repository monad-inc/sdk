

# GoogleCloudStorageSettingsConfig

Google Cloud Storage settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**bucketName** | **String** | The name of the Google Cloud Storage bucket to use |  [optional] |
|**compression** | **String** | Compression format of the Google Cloud Storage objects. |  [optional] |
|**format** | **String** | The format of the files in the bucket, e.g., \&quot;json\&quot;, \&quot;csv\&quot;, etc. |  [optional] |
|**partitionFormat** | **String** | Partition format of your bucket. Options: hive compliant (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;), flat hive compliant (&#39;dt&#x3D;2024-01-01&#39;), or simple date (&#39;2024/01/01&#39;). |  [optional] |
|**prefix** | **String** | The prefix to use when reading from the bucket. This is used to filter objects in the bucket. |  [optional] |
|**projectId** | **String** | The Google Cloud project ID to use |  [optional] |
|**recordLocation** | **String** | Location of the record in the object. Applies only for JSON objects. Leave empty for the entire record. |  [optional] |



