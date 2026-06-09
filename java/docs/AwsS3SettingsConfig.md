

# AwsS3SettingsConfig

AWS S3 settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of data upto now would be performed on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**bucket** | **String** | Name of the S3 bucket. |  |
|**compression** | **String** | Compression format of the S3 objects. |  |
|**format** | **String** | File format of the S3 objects. |  |
|**keyFilter** | [**SqsS3BaseKeyFilter**](SqsS3BaseKeyFilter.md) |  |  [optional] |
|**partitionFormat** | **String** | Partition format of your S3 bucket. Options: hive compliant (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;), flat hive compliant (&#39;dt&#x3D;2024-01-01&#39;), or simple date (&#39;2024/01/01&#39;). |  |
|**prefix** | **String** | Prefix of the S3 object keys to read. |  [optional] |
|**recordLocation** | **String** | Location of the record in the JSON object. This can be ignored if the record is not in JSON format. Leave empty if you want the entire record. |  [optional] |
|**region** | **String** | AWS Region of your bucket. |  [optional] |
|**roleArn** | **String** | Role ARN to assume when reading from S3. |  [optional] |
|**schema** | **Set&lt;String&gt;** | Ordered list of column names for headerless delimited files (e.g. PSV). Applies to the \&quot;delimited\&quot; format only; the \&quot;csv\&quot; and \&quot;wsv\&quot; formats always read column names from the first row and ignore this field. |  |



