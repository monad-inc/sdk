

# RoutesRetryQueueMessage


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **String** |  |  [optional] |
|**data** | **Object** |  |  [optional] |
|**dataBytes** | **Integer** | DataBytes is the payload size in bytes. Omitted is set when the payload was left out for being over 256 KiB. (meta_only leaves out every payload without setting Omitted — it isn&#39;t a size decision.) |  [optional] |
|**eligibleAt** | **String** | EligibleAt is a rough estimate of the earliest retry time, not an authoritative floor — it under-estimates output/enrichment nodes. |  [optional] |
|**errorNodeId** | **String** |  |  [optional] |
|**lastError** | **String** |  |  [optional] |
|**lastSeenAt** | **String** |  |  [optional] |
|**omitted** | **Boolean** |  |  [optional] |
|**retryCount** | **Integer** |  |  [optional] |
|**streamSeq** | **Integer** |  |  [optional] |



