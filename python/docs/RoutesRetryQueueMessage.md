# RoutesRetryQueueMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**data** | **List[int]** |  | [optional] 
**data_bytes** | **int** | DataBytes is the payload size in bytes. Omitted is set when the payload was left out for exceeding maxRetryRecordBytes. (meta_only leaves out every payload without setting Omitted — it isn&#39;t a size decision.) | [optional] 
**eligible_at** | **str** | EligibleAt is a rough estimate of the earliest retry time (see estEligibleAt), not an authoritative floor — it under-estimates output/enrichment nodes. | [optional] 
**error_node_id** | **str** |  | [optional] 
**last_error** | **str** |  | [optional] 
**last_seen_at** | **str** |  | [optional] 
**omitted** | **bool** |  | [optional] 
**retry_count** | **int** |  | [optional] 
**stream_seq** | **int** |  | [optional] 

## Example

```python
from monad.models.routes_retry_queue_message import RoutesRetryQueueMessage

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesRetryQueueMessage from a JSON string
routes_retry_queue_message_instance = RoutesRetryQueueMessage.from_json(json)
# print the JSON string representation of the object
print(RoutesRetryQueueMessage.to_json())

# convert the object into a dict
routes_retry_queue_message_dict = routes_retry_queue_message_instance.to_dict()
# create an instance of RoutesRetryQueueMessage from a dict
routes_retry_queue_message_from_dict = RoutesRetryQueueMessage.from_dict(routes_retry_queue_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


