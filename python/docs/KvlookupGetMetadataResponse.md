# KvlookupGetMetadataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes** | **int** |  | [optional] 
**last_ingested_time** | **str** |  | [optional] 
**max_bytes** | **int** |  | [optional] 
**number_of_keys** | **int** |  | [optional] 
**ttl** | **int** |  | [optional] 

## Example

```python
from monad.models.kvlookup_get_metadata_response import KvlookupGetMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of KvlookupGetMetadataResponse from a JSON string
kvlookup_get_metadata_response_instance = KvlookupGetMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(KvlookupGetMetadataResponse.to_json())

# convert the object into a dict
kvlookup_get_metadata_response_dict = kvlookup_get_metadata_response_instance.to_dict()
# create an instance of KvlookupGetMetadataResponse from a dict
kvlookup_get_metadata_response_from_dict = KvlookupGetMetadataResponse.from_dict(kvlookup_get_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


