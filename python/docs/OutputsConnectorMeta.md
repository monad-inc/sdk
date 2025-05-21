# OutputsConnectorMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** |  | [optional] 
**billing_type** | **int** |  | [optional] 
**category** | **str** |  | [optional] 
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
from monad.models.outputs_connector_meta import OutputsConnectorMeta

# TODO update the JSON string below
json = "{}"
# create an instance of OutputsConnectorMeta from a JSON string
outputs_connector_meta_instance = OutputsConnectorMeta.from_json(json)
# print the JSON string representation of the object
print(OutputsConnectorMeta.to_json())

# convert the object into a dict
outputs_connector_meta_dict = outputs_connector_meta_instance.to_dict()
# create an instance of OutputsConnectorMeta from a dict
outputs_connector_meta_from_dict = OutputsConnectorMeta.from_dict(outputs_connector_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


