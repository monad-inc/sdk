

# AwssqsoutputSettingsConfig

SQS Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**messageGroupId** | **String** | The message group ID for FIFO queues. This is required for FIFO queues. |  [optional] |
|**queueType** | **AwssqsoutputQueueType** |  |  [optional] |
|**queueUrl** | **String** | The URL of the SQS queue to poll for messages. |  [optional] |
|**region** | **String** | The AWS region where the SQS queue is located. |  [optional] |
|**roleArn** | **String** | The ARN of the IAM role to assume for accessing the SQS queue. |  [optional] |



