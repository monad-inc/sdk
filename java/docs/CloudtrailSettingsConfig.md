

# CloudtrailSettingsConfig

AWS Cloudtrail settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of data upto now would be performed on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**bucket** | **String** | The name of the S3 bucket |  [optional] |
|**prefix** | **String** | Prefix of the S3 object keys to read. |  [optional] |
|**region** | **String** | The region of the S3 bucket |  [optional] |
|**roleArn** | **String** | The ARN of the role to assume to access the bucket |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



