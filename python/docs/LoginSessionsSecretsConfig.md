# LoginSessionsSecretsConfig

CrowdStrike EDR login sessions secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID for the CrowdStrike API. This is required to authenticate requests. | [optional] 
**client_secret** | **str** | Client Secret for the CrowdStrike API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.login_sessions_secrets_config import LoginSessionsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LoginSessionsSecretsConfig from a JSON string
login_sessions_secrets_config_instance = LoginSessionsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(LoginSessionsSecretsConfig.to_json())

# convert the object into a dict
login_sessions_secrets_config_dict = login_sessions_secrets_config_instance.to_dict()
# create an instance of LoginSessionsSecretsConfig from a dict
login_sessions_secrets_config_from_dict = LoginSessionsSecretsConfig.from_dict(login_sessions_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


