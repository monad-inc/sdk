# CreateEnrichmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.create_enrichment_request import CreateEnrichmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateEnrichmentRequest from a JSON string
create_enrichment_request_instance = CreateEnrichmentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateEnrichmentRequest.to_json())

# convert the object into a dict
create_enrichment_request_dict = create_enrichment_request_instance.to_dict()
# create an instance of CreateEnrichmentRequest from a dict
create_enrichment_request_from_dict = CreateEnrichmentRequest.from_dict(create_enrichment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


