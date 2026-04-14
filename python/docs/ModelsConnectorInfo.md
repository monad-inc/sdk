# ModelsConnectorInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**house** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from monad.models.models_connector_info import ModelsConnectorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsConnectorInfo from a JSON string
models_connector_info_instance = ModelsConnectorInfo.from_json(json)
# print the JSON string representation of the object
print(ModelsConnectorInfo.to_json())

# convert the object into a dict
models_connector_info_dict = models_connector_info_instance.to_dict()
# create an instance of ModelsConnectorInfo from a dict
models_connector_info_from_dict = ModelsConnectorInfo.from_dict(models_connector_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


