# InputsConnectorMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** |  | [optional] 
**billing_type** | **int** |  | [optional] 
**category** | **str** |  | [optional] 
**config** | **object** |  | [optional] 
**dedicated_endpoint** | **bool** |  | [optional] 
**description** | **str** |  | [optional] 
**house** | **str** |  | [optional] 
**internal** | **bool** |  | [optional] 
**is_cron** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**tier** | **int** |  | [optional] 
**type_id** | **str** |  | [optional] 

## Example

```python
from monad.models.inputs_connector_meta import InputsConnectorMeta

# TODO update the JSON string below
json = "{}"
# create an instance of InputsConnectorMeta from a JSON string
inputs_connector_meta_instance = InputsConnectorMeta.from_json(json)
# print the JSON string representation of the object
print(InputsConnectorMeta.to_json())

# convert the object into a dict
inputs_connector_meta_dict = inputs_connector_meta_instance.to_dict()
# create an instance of InputsConnectorMeta from a dict
inputs_connector_meta_from_dict = InputsConnectorMeta.from_dict(inputs_connector_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


