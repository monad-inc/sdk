# SecretProcessesorOutputConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | [**SecretProcessesorOutputConfigSecrets**](SecretProcessesorOutputConfigSecrets.md) |  | [optional] 
**settings** | [**SecretProcessesorOutputConfigSettings**](SecretProcessesorOutputConfigSettings.md) |  | [optional] 

## Example

```python
from monad.models.secret_processesor_output_config import SecretProcessesorOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SecretProcessesorOutputConfig from a JSON string
secret_processesor_output_config_instance = SecretProcessesorOutputConfig.from_json(json)
# print the JSON string representation of the object
print(SecretProcessesorOutputConfig.to_json())

# convert the object into a dict
secret_processesor_output_config_dict = secret_processesor_output_config_instance.to_dict()
# create an instance of SecretProcessesorOutputConfig from a dict
secret_processesor_output_config_from_dict = SecretProcessesorOutputConfig.from_dict(secret_processesor_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


