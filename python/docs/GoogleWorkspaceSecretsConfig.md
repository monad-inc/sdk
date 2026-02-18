# GoogleWorkspaceSecretsConfig

Google Workspace Activity secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**oauth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.google_workspace_secrets_config import GoogleWorkspaceSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleWorkspaceSecretsConfig from a JSON string
google_workspace_secrets_config_instance = GoogleWorkspaceSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleWorkspaceSecretsConfig.to_json())

# convert the object into a dict
google_workspace_secrets_config_dict = google_workspace_secrets_config_instance.to_dict()
# create an instance of GoogleWorkspaceSecretsConfig from a dict
google_workspace_secrets_config_from_dict = GoogleWorkspaceSecretsConfig.from_dict(google_workspace_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


