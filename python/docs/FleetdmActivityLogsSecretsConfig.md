# FleetdmActivityLogsSecretsConfig

Fleet DM secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.fleetdm_activity_logs_secrets_config import FleetdmActivityLogsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FleetdmActivityLogsSecretsConfig from a JSON string
fleetdm_activity_logs_secrets_config_instance = FleetdmActivityLogsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(FleetdmActivityLogsSecretsConfig.to_json())

# convert the object into a dict
fleetdm_activity_logs_secrets_config_dict = fleetdm_activity_logs_secrets_config_instance.to_dict()
# create an instance of FleetdmActivityLogsSecretsConfig from a dict
fleetdm_activity_logs_secrets_config_from_dict = FleetdmActivityLogsSecretsConfig.from_dict(fleetdm_activity_logs_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


