# HttpSecretsConfig

HTTP Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_headers** | **Dict[str, str]** | Authentication headers | [optional] 

## Example

```python
from monad.models.http_secrets_config import HttpSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HttpSecretsConfig from a JSON string
http_secrets_config_instance = HttpSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(HttpSecretsConfig.to_json())

# convert the object into a dict
http_secrets_config_dict = http_secrets_config_instance.to_dict()
# create an instance of HttpSecretsConfig from a dict
http_secrets_config_from_dict = HttpSecretsConfig.from_dict(http_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


