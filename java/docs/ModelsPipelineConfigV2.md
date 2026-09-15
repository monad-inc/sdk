

# ModelsPipelineConfigV2


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**billingAccountId** | **String** |  |  [optional] |
|**componentTier** | **Integer** |  |  [optional] |
|**createdAt** | **String** |  |  [optional] |
|**cronSchedule** | **String** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**edges** | [**List&lt;ModelsPipelineEdge&gt;**](ModelsPipelineEdge.md) |  |  [optional] |
|**enabled** | **Boolean** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**isSynthetic** | **Boolean** |  |  [optional] |
|**managedBy** | **ModelsManagedBy** |  |  [optional] |
|**name** | **String** |  |  [optional] |
|**nextCronRunAt** | **String** |  |  [optional] |
|**nodes** | [**List&lt;ModelsPipelineNode&gt;**](ModelsPipelineNode.md) |  |  [optional] |
|**organizationId** | **String** |  |  [optional] |
|**organizationName** | **String** |  |  [optional] |
|**retentionPolicy** | [**ModelsPipelineRetentionPolicy**](ModelsPipelineRetentionPolicy.md) |  |  [optional] |
|**status** | [**ModelsPipelineStatus**](ModelsPipelineStatus.md) |  |  [optional] |
|**tags** | [**List&lt;ModelsTagSummary&gt;**](ModelsTagSummary.md) | Tags is response-only (like NextCronRunAt): never set on the operator path, so omitempty keeps the ConfigHash unchanged and tag edits don&#39;t roll pods. |  [optional] |
|**updatedAt** | **String** |  |  [optional] |



