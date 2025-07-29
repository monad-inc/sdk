# IamAccessAnalyzerSettingsConfig

AWS IAM Access Analyzer settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyzer_arn** | **str** | The [ARN of the analyzer] to retrieve findings from. | [optional] 
**cron** | **str** | Cron string for scheduling the ingest of your input. eg: &#x60;0 0 * * *&#x60; - Daily at midnight, or &#x60;*/15 * * * *&#x60; - Every 15 minutes | [optional] 
**filters** | [**List[IamAccessAnalyzerFilter]**](IamAccessAnalyzerFilter.md) | A filter to match for the findings to return. | [optional] 
**region** | **str** | The Region that you would receieve findings for | [optional] 
**role_arn** | **str** | The ARN of the role to assume to access the bucket | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.iam_access_analyzer_settings_config import IamAccessAnalyzerSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IamAccessAnalyzerSettingsConfig from a JSON string
iam_access_analyzer_settings_config_instance = IamAccessAnalyzerSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(IamAccessAnalyzerSettingsConfig.to_json())

# convert the object into a dict
iam_access_analyzer_settings_config_dict = iam_access_analyzer_settings_config_instance.to_dict()
# create an instance of IamAccessAnalyzerSettingsConfig from a dict
iam_access_analyzer_settings_config_from_dict = IamAccessAnalyzerSettingsConfig.from_dict(iam_access_analyzer_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


