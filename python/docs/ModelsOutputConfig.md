# ModelsOutputConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | **Dict[str, object]** |  | [optional] 
**settings** | **Dict[str, object]** |  | [optional] 

## Example

```python
from monad.models.models_output_config import ModelsOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsOutputConfig from a JSON string
models_output_config_instance = ModelsOutputConfig.from_json(json)
# print the JSON string representation of the object
print(ModelsOutputConfig.to_json())

# convert the object into a dict
models_output_config_dict = models_output_config_instance.to_dict()
# create an instance of ModelsOutputConfig from a dict
models_output_config_from_dict = ModelsOutputConfig.from_dict(models_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


