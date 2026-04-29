

# ModelsProgressEntry


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**label** | **ModelsProgressLabel** |  |  [optional] |
|**partitionKey** | **String** | PartitionKey is an optional identifier for multi-entity inputs (e.g., \&quot;detector-123\&quot;, \&quot;us-east-1\&quot;) In a case where we store multiple state timestamps for a singular input we would use this field as a differentiator |  [optional] |
|**ranges** | [**List&lt;GithubComMonadIncCorePkgTypesModelsTimeRange&gt;**](GithubComMonadIncCorePkgTypesModelsTimeRange.md) | Ranges represents the time ranges that have been read by an input node. Each range is a tuple of (start, end) timestamps indicating what data has been processed. Multiple ranges allow tracking non-contiguous data reads. |  [optional] |



