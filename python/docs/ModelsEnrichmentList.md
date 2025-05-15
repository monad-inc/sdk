# ModelsEnrichmentList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrichments** | [**List[ModelsEnrichment]**](ModelsEnrichment.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.models_enrichment_list import ModelsEnrichmentList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsEnrichmentList from a JSON string
models_enrichment_list_instance = ModelsEnrichmentList.from_json(json)
# print the JSON string representation of the object
print(ModelsEnrichmentList.to_json())

# convert the object into a dict
models_enrichment_list_dict = models_enrichment_list_instance.to_dict()
# create an instance of ModelsEnrichmentList from a dict
models_enrichment_list_from_dict = ModelsEnrichmentList.from_dict(models_enrichment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


