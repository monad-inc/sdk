# PostgresqlSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_names** | **List[str]** | The column names to write data to, must match the root fields of the data If not provided all root fields will be used | [optional] 
**database** | **str** | The database name to connect to | [optional] 
**host** | **str** | The host of the PostgreSQL database | [optional] 
**port** | **int** | The port of the PostgreSQL database | [optional] 
**table** | **str** | The table name to write data to | [optional] 
**user** | **str** | The user to connect to the PostgreSQL database | [optional] 

## Example

```python
from monad.models.postgresql_settings_config import PostgresqlSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PostgresqlSettingsConfig from a JSON string
postgresql_settings_config_instance = PostgresqlSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(PostgresqlSettingsConfig.to_json())

# convert the object into a dict
postgresql_settings_config_dict = postgresql_settings_config_instance.to_dict()
# create an instance of PostgresqlSettingsConfig from a dict
postgresql_settings_config_from_dict = PostgresqlSettingsConfig.from_dict(postgresql_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


