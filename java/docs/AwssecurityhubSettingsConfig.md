

# AwssecurityhubSettingsConfig

Aws Security Hub Findings settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cron** | **String** | Cron expression for scheduling the input |  [optional] |
|**queueUrl** | **String** | QueueUrl is the URL of the SQS queue to be used for AWS Security Hub integration. |  [optional] |
|**region** | **String** | Region is the AWS region where the SQS queue and Security Hub are located. |  [optional] |
|**roleArn** | **String** | RoleArn is the ARN of the IAM role to assume for accessing AWS Queue. |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



