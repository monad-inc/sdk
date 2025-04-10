

# CrowdstrikeFdrSettingsConfig

Crowdstrike Falcon Data Replicator settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**awsQueueUrl** | **String** | AWS SQS queue URL provided to you by the CrowdStrike Falcon console |  [optional] |
|**awsRegionName** | **String** | Name of the region where the queue resides |  [optional] |
|**awsS3Url** | **String** | The URL of the S3 bucket |  [optional] |
|**cron** | **String** | The time in seconds to wait before each check of the queue for more messages |  [optional] |
|**visibilityTimeout** | **Integer** | Time in seconds before a message is returned back to the SQS queue |  [optional] |



