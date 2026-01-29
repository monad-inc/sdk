# AwsIamAliasesSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[AwsIamAliasesAccount]**](AwsIamAliasesAccount.md) | List of AWS accounts to fetch IAM aliases from | [optional] 
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.aws_iam_aliases_settings_config import AwsIamAliasesSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AwsIamAliasesSettingsConfig from a JSON string
aws_iam_aliases_settings_config_instance = AwsIamAliasesSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(AwsIamAliasesSettingsConfig.to_json())

# convert the object into a dict
aws_iam_aliases_settings_config_dict = aws_iam_aliases_settings_config_instance.to_dict()
# create an instance of AwsIamAliasesSettingsConfig from a dict
aws_iam_aliases_settings_config_from_dict = AwsIamAliasesSettingsConfig.from_dict(aws_iam_aliases_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


