

# IamAccessAnalyzerSettingsConfig

AWS IAM Access Analyzer settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**analyzerArn** | **String** | The [ARN of the analyzer] to retrieve findings from. |  [optional] |
|**cron** | **String** | Cron string for scheduling the ingest of your input. eg: &#x60;0 0 * * *&#x60; - Daily at midnight, or &#x60;*_/15 * * * *&#x60; - Every 15 minutes |  [optional] |
|**filters** | [**List&lt;IamAccessAnalyzerFilter&gt;**](IamAccessAnalyzerFilter.md) | A filter to match for the findings to return. |  [optional] |
|**region** | **String** | The Region that you would receieve findings for |  [optional] |
|**roleArn** | **String** | The ARN of the role to assume to access the bucket |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



