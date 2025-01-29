# BatchConfigBatchConfig

controls when a batch of records is sent by limiting the number of records, total size, and maximum time elapsed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_data_size** | **int** |  | [optional] 
**batch_record_count** | **int** |  | [optional] 
**publish_rate** | **int** |  | [optional] 

## Example

```python
from monad.models.batch_config_batch_config import BatchConfigBatchConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BatchConfigBatchConfig from a JSON string
batch_config_batch_config_instance = BatchConfigBatchConfig.from_json(json)
# print the JSON string representation of the object
print(BatchConfigBatchConfig.to_json())

# convert the object into a dict
batch_config_batch_config_dict = batch_config_batch_config_instance.to_dict()
# create an instance of BatchConfigBatchConfig from a dict
batch_config_batch_config_from_dict = BatchConfigBatchConfig.from_dict(batch_config_batch_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


