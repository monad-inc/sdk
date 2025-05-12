# SecurityLakeSourceAccountDetails

Details about the source AWS account and region for Security Lake

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_account_id** | **str** | Source AWS Account ID | [optional] 
**source_region** | **str** | Source AWS Region | [optional] 

## Example

```python
from monad.models.security_lake_source_account_details import SecurityLakeSourceAccountDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityLakeSourceAccountDetails from a JSON string
security_lake_source_account_details_instance = SecurityLakeSourceAccountDetails.from_json(json)
# print the JSON string representation of the object
print(SecurityLakeSourceAccountDetails.to_json())

# convert the object into a dict
security_lake_source_account_details_dict = security_lake_source_account_details_instance.to_dict()
# create an instance of SecurityLakeSourceAccountDetails from a dict
security_lake_source_account_details_from_dict = SecurityLakeSourceAccountDetails.from_dict(security_lake_source_account_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


