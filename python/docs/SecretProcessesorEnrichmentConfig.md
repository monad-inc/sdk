# SecretProcessesorEnrichmentConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | [**SecretProcessesorEnrichmentConfigSecrets**](SecretProcessesorEnrichmentConfigSecrets.md) |  | [optional] 
**settings** | [**SecretProcessesorEnrichmentConfigSettings**](SecretProcessesorEnrichmentConfigSettings.md) |  | [optional] 

## Example

```python
from monad.models.secret_processesor_enrichment_config import SecretProcessesorEnrichmentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SecretProcessesorEnrichmentConfig from a JSON string
secret_processesor_enrichment_config_instance = SecretProcessesorEnrichmentConfig.from_json(json)
# print the JSON string representation of the object
print(SecretProcessesorEnrichmentConfig.to_json())

# convert the object into a dict
secret_processesor_enrichment_config_dict = secret_processesor_enrichment_config_instance.to_dict()
# create an instance of SecretProcessesorEnrichmentConfig from a dict
secret_processesor_enrichment_config_from_dict = SecretProcessesorEnrichmentConfig.from_dict(secret_processesor_enrichment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


