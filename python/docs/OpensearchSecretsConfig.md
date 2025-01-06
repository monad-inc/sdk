# OpensearchSecretsConfig

OpenSearch Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password for authenticating with OpenSearch. | [optional] 

## Example

```python
from monad.models.opensearch_secrets_config import OpensearchSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OpensearchSecretsConfig from a JSON string
opensearch_secrets_config_instance = OpensearchSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(OpensearchSecretsConfig.to_json())

# convert the object into a dict
opensearch_secrets_config_dict = opensearch_secrets_config_instance.to_dict()
# create an instance of OpensearchSecretsConfig from a dict
opensearch_secrets_config_from_dict = OpensearchSecretsConfig.from_dict(opensearch_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


