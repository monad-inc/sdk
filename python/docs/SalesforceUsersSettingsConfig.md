# SalesforceUsersSettingsConfig

Salesforce Users settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron string for scheduling the ingest of your input | [optional] 
**domain_url** | **str** | Domain URL for the Salesforce instance | [optional] 
**include_inactive** | **bool** | Include inactive users in the results | [optional] 
**organization_id** | **str** | Organization ID for the Salesforce instance | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.salesforce_users_settings_config import SalesforceUsersSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SalesforceUsersSettingsConfig from a JSON string
salesforce_users_settings_config_instance = SalesforceUsersSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SalesforceUsersSettingsConfig.to_json())

# convert the object into a dict
salesforce_users_settings_config_dict = salesforce_users_settings_config_instance.to_dict()
# create an instance of SalesforceUsersSettingsConfig from a dict
salesforce_users_settings_config_from_dict = SalesforceUsersSettingsConfig.from_dict(salesforce_users_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


