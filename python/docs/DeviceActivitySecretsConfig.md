# DeviceActivitySecretsConfig

Google Workspace Device Activity secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | **str** | JSON credentials to authenticate with Google Cloud. | [optional] 

## Example

```python
from monad.models.device_activity_secrets_config import DeviceActivitySecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceActivitySecretsConfig from a JSON string
device_activity_secrets_config_instance = DeviceActivitySecretsConfig.from_json(json)
# print the JSON string representation of the object
print(DeviceActivitySecretsConfig.to_json())

# convert the object into a dict
device_activity_secrets_config_dict = device_activity_secrets_config_instance.to_dict()
# create an instance of DeviceActivitySecretsConfig from a dict
device_activity_secrets_config_from_dict = DeviceActivitySecretsConfig.from_dict(device_activity_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


