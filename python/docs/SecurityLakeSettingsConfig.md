# SecurityLakeSettingsConfig

Security Lake Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**bucket_name** | **str** | Bucket Name | [optional] 
**bucket_url** | **str** | The name of the S3 bucket where data will be stored | [optional] 
**key** | **str** | S3 Key | [optional] 
**parquet_format** | [**ParquetParquetFormatter**](ParquetParquetFormatter.md) |  | [optional] 
**role_arn** | **str** | The Amazon Resource Name (ARN) of the IAM role to assume which grants access to the S3 bucket | [optional] 
**source_account_details** | [**SecurityLakeSourceAccountDetails**](SecurityLakeSourceAccountDetails.md) |  | [optional] 

## Example

```python
from monad.models.security_lake_settings_config import SecurityLakeSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityLakeSettingsConfig from a JSON string
security_lake_settings_config_instance = SecurityLakeSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SecurityLakeSettingsConfig.to_json())

# convert the object into a dict
security_lake_settings_config_dict = security_lake_settings_config_instance.to_dict()
# create an instance of SecurityLakeSettingsConfig from a dict
security_lake_settings_config_from_dict = SecurityLakeSettingsConfig.from_dict(security_lake_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


