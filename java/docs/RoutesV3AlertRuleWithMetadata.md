

# RoutesV3AlertRuleWithMetadata


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**active** | **Boolean** |  |  [optional] |
|**createdAt** | **String** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**invertSelection** | **Boolean** | InvertSelection makes the selection (PipelineIDs and TagIDs) an exclude-list. Only pipeline-granularity rule types consult it. |  [optional] |
|**managedBy** | **ModelsManagedBy** |  |  [optional] |
|**name** | **String** |  |  [optional] |
|**organizationId** | **String** |  |  [optional] |
|**pipelineIds** | **List&lt;String&gt;** |  |  [optional] |
|**resourceMetadata** | [**ConnectormetaResourceMetadata**](ConnectormetaResourceMetadata.md) |  |  [optional] |
|**ruleConfig** | **Map&lt;String, Object&gt;** |  |  [optional] |
|**severity** | **String** |  |  [optional] |
|**tagIds** | **List&lt;String&gt;** | TagIDs adds every pipeline carrying any of these tags to the selection. |  [optional] |
|**type** | **String** |  |  [optional] |
|**updatedAt** | **String** |  |  [optional] |



