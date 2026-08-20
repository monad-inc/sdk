# ModelsInputConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | **Dict[str, object]** |  | [optional] 
**settings** | **Dict[str, object]** |  | [optional] 

## Example

```python
from monad.models.models_input_config import ModelsInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsInputConfig from a JSON string
models_input_config_instance = ModelsInputConfig.from_json(json)
# print the JSON string representation of the object
print(ModelsInputConfig.to_json())

# convert the object into a dict
models_input_config_dict = models_input_config_instance.to_dict()
# create an instance of ModelsInputConfig from a dict
models_input_config_from_dict = ModelsInputConfig.from_dict(models_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


