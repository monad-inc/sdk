# ModelsEnrichmentConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | **Dict[str, object]** |  | [optional] 
**settings** | **Dict[str, object]** |  | [optional] 

## Example

```python
from monad.models.models_enrichment_config import ModelsEnrichmentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsEnrichmentConfig from a JSON string
models_enrichment_config_instance = ModelsEnrichmentConfig.from_json(json)
# print the JSON string representation of the object
print(ModelsEnrichmentConfig.to_json())

# convert the object into a dict
models_enrichment_config_dict = models_enrichment_config_instance.to_dict()
# create an instance of ModelsEnrichmentConfig from a dict
models_enrichment_config_from_dict = ModelsEnrichmentConfig.from_dict(models_enrichment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


