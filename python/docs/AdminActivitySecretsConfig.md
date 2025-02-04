# AdminActivitySecretsConfig

Google Workspace Admin Activity secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.admin_activity_secrets_config import AdminActivitySecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdminActivitySecretsConfig from a JSON string
admin_activity_secrets_config_instance = AdminActivitySecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AdminActivitySecretsConfig.to_json())

# convert the object into a dict
admin_activity_secrets_config_dict = admin_activity_secrets_config_instance.to_dict()
# create an instance of AdminActivitySecretsConfig from a dict
admin_activity_secrets_config_from_dict = AdminActivitySecretsConfig.from_dict(admin_activity_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


