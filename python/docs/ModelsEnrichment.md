# ModelsEnrichment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsEnrichmentConfig**](ModelsEnrichmentConfig.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_enrichment import ModelsEnrichment

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsEnrichment from a JSON string
models_enrichment_instance = ModelsEnrichment.from_json(json)
# print the JSON string representation of the object
print(ModelsEnrichment.to_json())

# convert the object into a dict
models_enrichment_dict = models_enrichment_instance.to_dict()
# create an instance of ModelsEnrichment from a dict
models_enrichment_from_dict = ModelsEnrichment.from_dict(models_enrichment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


