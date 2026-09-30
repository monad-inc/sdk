# BuildkiteGraphqlInputSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_pagination** | **bool** | Enable pagination support | [optional] 
**graphql_query** | **str** | The GraphQL query to execute against the endpoint to fetch data | [optional] 
**has_next_page_path** | **str** | JSONPath location to check if there are more pages | [optional] 
**interval_seconds** | **int** | Time interval in seconds between consecutive GraphQL API calls | [optional] 
**pagination_cursor_path** | **str** | JSONPath location for pagination cursor/token | [optional] 
**record_location** | **str** | JSONPath location of the records array in the GraphQL response | [optional] 
**variables** | [**List[MonadGraphqlInputVariable]**](MonadGraphqlInputVariable.md) | GraphQL query variables to pass with each request | [optional] 

## Example

```python
from monad.models.buildkite_graphql_input_settings_config import BuildkiteGraphqlInputSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BuildkiteGraphqlInputSettingsConfig from a JSON string
buildkite_graphql_input_settings_config_instance = BuildkiteGraphqlInputSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(BuildkiteGraphqlInputSettingsConfig.to_json())

# convert the object into a dict
buildkite_graphql_input_settings_config_dict = buildkite_graphql_input_settings_config_instance.to_dict()
# create an instance of BuildkiteGraphqlInputSettingsConfig from a dict
buildkite_graphql_input_settings_config_from_dict = BuildkiteGraphqlInputSettingsConfig.from_dict(buildkite_graphql_input_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


