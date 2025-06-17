# GitlabIssuesSecretsConfig

Gitlab Issues secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_access_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.gitlab_issues_secrets_config import GitlabIssuesSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GitlabIssuesSecretsConfig from a JSON string
gitlab_issues_secrets_config_instance = GitlabIssuesSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(GitlabIssuesSecretsConfig.to_json())

# convert the object into a dict
gitlab_issues_secrets_config_dict = gitlab_issues_secrets_config_instance.to_dict()
# create an instance of GitlabIssuesSecretsConfig from a dict
gitlab_issues_secrets_config_from_dict = GitlabIssuesSecretsConfig.from_dict(gitlab_issues_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


