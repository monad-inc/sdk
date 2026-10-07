# GoogleCloudStorageSecretsConfig

Google Cloud Storage secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials_json** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.google_cloud_storage_secrets_config import GoogleCloudStorageSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudStorageSecretsConfig from a JSON string
google_cloud_storage_secrets_config_instance = GoogleCloudStorageSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudStorageSecretsConfig.to_json())

# convert the object into a dict
google_cloud_storage_secrets_config_dict = google_cloud_storage_secrets_config_instance.to_dict()
# create an instance of GoogleCloudStorageSecretsConfig from a dict
google_cloud_storage_secrets_config_from_dict = GoogleCloudStorageSecretsConfig.from_dict(google_cloud_storage_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


