# AlertCenterSecretsConfig

Google Workspace Activity secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**oauth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.alert_center_secrets_config import AlertCenterSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AlertCenterSecretsConfig from a JSON string
alert_center_secrets_config_instance = AlertCenterSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AlertCenterSecretsConfig.to_json())

# convert the object into a dict
alert_center_secrets_config_dict = alert_center_secrets_config_instance.to_dict()
# create an instance of AlertCenterSecretsConfig from a dict
alert_center_secrets_config_from_dict = AlertCenterSecretsConfig.from_dict(alert_center_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


