

# AwsGuarddutySettingsConfig

AWS Guardduty settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**region** | **String** | The AWS region where GuardDuty is enabled. |  [optional] |
|**roleArn** | **String** | The ARN of the IAM role to assume for accessing GuardDuty. |  [optional] |
|**severity** | **String** | Filter findings by severity levels. |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



