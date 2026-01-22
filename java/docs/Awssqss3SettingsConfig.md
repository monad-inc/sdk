

# Awssqss3SettingsConfig

AWS SQS S3 settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**compression** | **String** | Compression format of the S3 objects. |  [optional] |
|**format** | **String** | File format of the S3 objects. |  [optional] |
|**queueUrl** | **String** | The URL of the SQS queue to poll for messages. |  [optional] |
|**recordLocation** | **String** | Location of the record in the JSON object. This can be ignored if the record is not in JSON format. |  [optional] |
|**region** | **String** | The AWS region where the SQS queue is located. |  [optional] |
|**roleArn** | **String** | The ARN of the IAM role to assume for accessing the SQS queue. |  [optional] |
|**withMetadata** | **Boolean** | Whether to include S3 object metadata in the output. |  [optional] |



