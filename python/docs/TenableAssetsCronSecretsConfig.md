# TenableAssetsCronSecretsConfig

Tenable assets secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.tenable_assets_cron_secrets_config import TenableAssetsCronSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TenableAssetsCronSecretsConfig from a JSON string
tenable_assets_cron_secrets_config_instance = TenableAssetsCronSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(TenableAssetsCronSecretsConfig.to_json())

# convert the object into a dict
tenable_assets_cron_secrets_config_dict = tenable_assets_cron_secrets_config_instance.to_dict()
# create an instance of TenableAssetsCronSecretsConfig from a dict
tenable_assets_cron_secrets_config_from_dict = TenableAssetsCronSecretsConfig.from_dict(tenable_assets_cron_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


