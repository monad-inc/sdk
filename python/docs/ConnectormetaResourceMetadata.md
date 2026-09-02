# ConnectormetaResourceMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**house** | **str** |  | [optional] 
**in_beta** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**tier** | **int** |  | [optional] 
**type_id** | **str** |  | [optional] 

## Example

```python
from monad.models.connectormeta_resource_metadata import ConnectormetaResourceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectormetaResourceMetadata from a JSON string
connectormeta_resource_metadata_instance = ConnectormetaResourceMetadata.from_json(json)
# print the JSON string representation of the object
print(ConnectormetaResourceMetadata.to_json())

# convert the object into a dict
connectormeta_resource_metadata_dict = connectormeta_resource_metadata_instance.to_dict()
# create an instance of ConnectormetaResourceMetadata from a dict
connectormeta_resource_metadata_from_dict = ConnectormetaResourceMetadata.from_dict(connectormeta_resource_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


