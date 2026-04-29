# UpdateEnrichmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.update_enrichment_request import UpdateEnrichmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateEnrichmentRequest from a JSON string
update_enrichment_request_instance = UpdateEnrichmentRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateEnrichmentRequest.to_json())

# convert the object into a dict
update_enrichment_request_dict = update_enrichment_request_instance.to_dict()
# create an instance of UpdateEnrichmentRequest from a dict
update_enrichment_request_from_dict = UpdateEnrichmentRequest.from_dict(update_enrichment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


