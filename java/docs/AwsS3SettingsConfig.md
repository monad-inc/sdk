

# AwsS3SettingsConfig

AWS S3 settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of data upto now would be performed on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**bucket** | **String** | Name of the S3 bucket. |  [optional] |
|**compression** | **String** | Compression format of the S3 objects. |  [optional] |
|**format** | **String** | File format of the S3 objects. |  [optional] |
|**partitionFormat** | **String** | Specifies the partition format of your S3 bucket. Select the option that matches how your data is currently organized in S3. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization. |  [optional] |
|**prefix** | **String** | Prefix of the S3 object keys to read. |  [optional] |
|**recordLocation** | **String** | Location of the record in the JSON object. This can be ignored if the record is not in JSON format. |  [optional] |
|**region** | **String** | AWS Region of your bucket. |  [optional] |
|**roleArn** | **String** | Role ARN to assume when reading from S3. |  [optional] |



