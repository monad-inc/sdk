# InspectorSecretsConfig

AWS Inspector secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.inspector_secrets_config import InspectorSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InspectorSecretsConfig from a JSON string
inspector_secrets_config_instance = InspectorSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(InspectorSecretsConfig.to_json())

# convert the object into a dict
inspector_secrets_config_dict = inspector_secrets_config_instance.to_dict()
# create an instance of InspectorSecretsConfig from a dict
inspector_secrets_config_from_dict = InspectorSecretsConfig.from_dict(inspector_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


