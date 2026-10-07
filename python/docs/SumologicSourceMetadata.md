# SumologicSourceMetadata

Additional metadata to send with each source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_source_category** | **str** | Desired source category. Useful if you want to override the source category configured for the source. | [optional] 
**custom_source_host** | **str** | Desired source host. Useful if you want to override the source host configured for the source. | [optional] 
**custom_source_name** | **str** | Desired source name. Useful if you want to override the source name configured for the source. | [optional] 
**sumo_fields** | [**List[SumologicSumoField]**](SumologicSumoField.md) |  | [optional] 

## Example

```python
from monad.models.sumologic_source_metadata import SumologicSourceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SumologicSourceMetadata from a JSON string
sumologic_source_metadata_instance = SumologicSourceMetadata.from_json(json)
# print the JSON string representation of the object
print(SumologicSourceMetadata.to_json())

# convert the object into a dict
sumologic_source_metadata_dict = sumologic_source_metadata_instance.to_dict()
# create an instance of SumologicSourceMetadata from a dict
sumologic_source_metadata_from_dict = SumologicSourceMetadata.from_dict(sumologic_source_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


