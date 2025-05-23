# EnrichmentConnectorMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**house** | **str** |  | [optional] 
**internal** | **bool** |  | [optional] 
**logo_key** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**tier** | **int** |  | [optional] 
**type_id** | **str** |  | [optional] 

## Example

```python
from monad.models.enrichment_connector_meta import EnrichmentConnectorMeta

# TODO update the JSON string below
json = "{}"
# create an instance of EnrichmentConnectorMeta from a JSON string
enrichment_connector_meta_instance = EnrichmentConnectorMeta.from_json(json)
# print the JSON string representation of the object
print(EnrichmentConnectorMeta.to_json())

# convert the object into a dict
enrichment_connector_meta_dict = enrichment_connector_meta_instance.to_dict()
# create an instance of EnrichmentConnectorMeta from a dict
enrichment_connector_meta_from_dict = EnrichmentConnectorMeta.from_dict(enrichment_connector_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


