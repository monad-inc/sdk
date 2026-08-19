

# RoutesRetryQueueMessage


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **String** |  |  [optional] |
|**data** | **List&lt;Integer&gt;** |  |  [optional] |
|**dataBytes** | **Integer** | DataBytes is the payload size in bytes. Omitted is set when the payload was left out for exceeding maxRetryRecordBytes. (meta_only leaves out every payload without setting Omitted — it isn&#39;t a size decision.) |  [optional] |
|**eligibleAt** | **String** | EligibleAt is a rough estimate of the earliest retry time (see estEligibleAt), not an authoritative floor — it under-estimates output/enrichment nodes. |  [optional] |
|**errorNodeId** | **String** |  |  [optional] |
|**lastError** | **String** |  |  [optional] |
|**lastSeenAt** | **String** |  |  [optional] |
|**omitted** | **Boolean** |  |  [optional] |
|**retryCount** | **Integer** |  |  [optional] |
|**streamSeq** | **Integer** |  |  [optional] |



