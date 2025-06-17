# GitlabIssuesSettingsConfig

Gitlab Issues settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidential** | **bool** | Confidential to filter issues by confidentiality status. Confidential &#x3D; true means only show confidential issues. | [optional] 
**gitlab_url** | **str** | GitLab URL (for Custom-Urls when self hosting. Defaults to https://gitlab.com.) | [optional] 
**issue_type** | **str** | IssueType to filter issues by type e.g. issue, incident, etc. | [optional] 
**project_id** | **str** | Project ID to get issues for | [optional] 
**state** | **str** | State to filter issues by e.g. opened, closed | [optional] 
**with_label_details** | **bool** | Include label details in the response | [optional] 

## Example

```python
from monad.models.gitlab_issues_settings_config import GitlabIssuesSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GitlabIssuesSettingsConfig from a JSON string
gitlab_issues_settings_config_instance = GitlabIssuesSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(GitlabIssuesSettingsConfig.to_json())

# convert the object into a dict
gitlab_issues_settings_config_dict = gitlab_issues_settings_config_instance.to_dict()
# create an instance of GitlabIssuesSettingsConfig from a dict
gitlab_issues_settings_config_from_dict = GitlabIssuesSettingsConfig.from_dict(gitlab_issues_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


