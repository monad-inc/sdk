# ReplaceEnrichmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.replace_enrichment_request import ReplaceEnrichmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceEnrichmentRequest from a JSON string
replace_enrichment_request_instance = ReplaceEnrichmentRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceEnrichmentRequest.to_json())

# convert the object into a dict
replace_enrichment_request_dict = replace_enrichment_request_instance.to_dict()
# create an instance of ReplaceEnrichmentRequest from a dict
replace_enrichment_request_from_dict = ReplaceEnrichmentRequest.from_dict(replace_enrichment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


