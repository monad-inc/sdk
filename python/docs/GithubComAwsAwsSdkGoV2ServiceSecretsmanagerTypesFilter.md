# GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**TypesFilterNameStringType**](TypesFilterNameStringType.md) |  | [optional] 
**values** | **List[str]** | The keyword to filter for.  You can prefix your search value with an exclamation mark ( ! ) in order to perform negation filters. | [optional] 

## Example

```python
from monad.models.github_com_aws_aws_sdk_go_v2_service_secretsmanager_types_filter import GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter from a JSON string
github_com_aws_aws_sdk_go_v2_service_secretsmanager_types_filter_instance = GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter.from_json(json)
# print the JSON string representation of the object
print(GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter.to_json())

# convert the object into a dict
github_com_aws_aws_sdk_go_v2_service_secretsmanager_types_filter_dict = github_com_aws_aws_sdk_go_v2_service_secretsmanager_types_filter_instance.to_dict()
# create an instance of GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter from a dict
github_com_aws_aws_sdk_go_v2_service_secretsmanager_types_filter_from_dict = GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter.from_dict(github_com_aws_aws_sdk_go_v2_service_secretsmanager_types_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


