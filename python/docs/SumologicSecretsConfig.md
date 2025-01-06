# SumologicSecretsConfig

Sumo Logic Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_id** | **str** | The Access ID for authenticating with Sumo Logic. | [optional] 
**access_key** | **str** | The Access Key for authenticating with Sumo Logic. | [optional] 

## Example

```python
from monad.models.sumologic_secrets_config import SumologicSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SumologicSecretsConfig from a JSON string
sumologic_secrets_config_instance = SumologicSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SumologicSecretsConfig.to_json())

# convert the object into a dict
sumologic_secrets_config_dict = sumologic_secrets_config_instance.to_dict()
# create an instance of SumologicSecretsConfig from a dict
sumologic_secrets_config_from_dict = SumologicSecretsConfig.from_dict(sumologic_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


