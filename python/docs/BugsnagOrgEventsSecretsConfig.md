# BugsnagOrgEventsSecretsConfig

Bugsnag Org Events secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.bugsnag_org_events_secrets_config import BugsnagOrgEventsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BugsnagOrgEventsSecretsConfig from a JSON string
bugsnag_org_events_secrets_config_instance = BugsnagOrgEventsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(BugsnagOrgEventsSecretsConfig.to_json())

# convert the object into a dict
bugsnag_org_events_secrets_config_dict = bugsnag_org_events_secrets_config_instance.to_dict()
# create an instance of BugsnagOrgEventsSecretsConfig from a dict
bugsnag_org_events_secrets_config_from_dict = BugsnagOrgEventsSecretsConfig.from_dict(bugsnag_org_events_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


