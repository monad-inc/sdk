# AzureBlobStorageSecretsConfig

Sentinel Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**tenant_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.azure_blob_storage_secrets_config import AzureBlobStorageSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlobStorageSecretsConfig from a JSON string
azure_blob_storage_secrets_config_instance = AzureBlobStorageSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AzureBlobStorageSecretsConfig.to_json())

# convert the object into a dict
azure_blob_storage_secrets_config_dict = azure_blob_storage_secrets_config_instance.to_dict()
# create an instance of AzureBlobStorageSecretsConfig from a dict
azure_blob_storage_secrets_config_from_dict = AzureBlobStorageSecretsConfig.from_dict(azure_blob_storage_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


