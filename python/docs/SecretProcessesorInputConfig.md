# SecretProcessesorInputConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | [**SecretProcessesorInputConfigSecrets**](SecretProcessesorInputConfigSecrets.md) |  | [optional] 
**settings** | [**SecretProcessesorInputConfigSettings**](SecretProcessesorInputConfigSettings.md) |  | [optional] 

## Example

```python
from monad.models.secret_processesor_input_config import SecretProcessesorInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SecretProcessesorInputConfig from a JSON string
secret_processesor_input_config_instance = SecretProcessesorInputConfig.from_json(json)
# print the JSON string representation of the object
print(SecretProcessesorInputConfig.to_json())

# convert the object into a dict
secret_processesor_input_config_dict = secret_processesor_input_config_instance.to_dict()
# create an instance of SecretProcessesorInputConfig from a dict
secret_processesor_input_config_from_dict = SecretProcessesorInputConfig.from_dict(secret_processesor_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


