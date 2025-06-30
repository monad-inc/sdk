

# SecurityGroupsSettingsConfig


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cron** | **String** | Cron string for scheduling the ingest of your input |  [optional] |
|**filters** | [**List&lt;SecurityGroupsFilter&gt;**](SecurityGroupsFilter.md) | Filters for the security groups |  [optional] |
|**region** | **String** | The AWS region where the security groups that are being fetched are located. |  [optional] |
|**roleArn** | **String** | RoleArn is the ARN of the IAM role to assume for accessing AWS security groups. |  [optional] |



