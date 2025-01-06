# DriveActivitySecretsConfig

Google Workspace Drive Activity secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | **str** | JSON credentials to authenticate with Google Cloud. | [optional] 

## Example

```python
from monad.models.drive_activity_secrets_config import DriveActivitySecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DriveActivitySecretsConfig from a JSON string
drive_activity_secrets_config_instance = DriveActivitySecretsConfig.from_json(json)
# print the JSON string representation of the object
print(DriveActivitySecretsConfig.to_json())

# convert the object into a dict
drive_activity_secrets_config_dict = drive_activity_secrets_config_instance.to_dict()
# create an instance of DriveActivitySecretsConfig from a dict
drive_activity_secrets_config_from_dict = DriveActivitySecretsConfig.from_dict(drive_activity_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


