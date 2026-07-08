# BuildkiteGraphqlInputSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.buildkite_graphql_input_secrets_config import BuildkiteGraphqlInputSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BuildkiteGraphqlInputSecretsConfig from a JSON string
buildkite_graphql_input_secrets_config_instance = BuildkiteGraphqlInputSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(BuildkiteGraphqlInputSecretsConfig.to_json())

# convert the object into a dict
buildkite_graphql_input_secrets_config_dict = buildkite_graphql_input_secrets_config_instance.to_dict()
# create an instance of BuildkiteGraphqlInputSecretsConfig from a dict
buildkite_graphql_input_secrets_config_from_dict = BuildkiteGraphqlInputSecretsConfig.from_dict(buildkite_graphql_input_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


