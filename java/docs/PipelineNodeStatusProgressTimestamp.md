

# PipelineNodeStatusProgressTimestamp


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**label** | **String** | Label is an optional descriptor for the timestamp that is human-readable and can be displayed in the UI It should mainly be used to contain the field name/path that is used to extract timestamp for a given inputs data |  [optional] |
|**partitionKey** | **String** | PartitionKey is an optional identifier for multi-entity inputs (e.g., \&quot;detector-123\&quot;, \&quot;us-east-1\&quot;) In a case where we store multiple state timestamps for a singular input we would use this field as a differentiator |  [optional] |
|**timestamp** | **String** | Timestamp indicates the progress position |  [optional] |



