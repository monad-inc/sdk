# TaniumGraphqlInputSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.tanium_graphql_input_secrets_config import TaniumGraphqlInputSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TaniumGraphqlInputSecretsConfig from a JSON string
tanium_graphql_input_secrets_config_instance = TaniumGraphqlInputSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(TaniumGraphqlInputSecretsConfig.to_json())

# convert the object into a dict
tanium_graphql_input_secrets_config_dict = tanium_graphql_input_secrets_config_instance.to_dict()
# create an instance of TaniumGraphqlInputSecretsConfig from a dict
tanium_graphql_input_secrets_config_from_dict = TaniumGraphqlInputSecretsConfig.from_dict(tanium_graphql_input_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


