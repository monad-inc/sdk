

# RoutesV3AlertRuleWithMetadata


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**active** | **Boolean** |  |  [optional] |
|**createdAt** | **String** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**invertSelection** | **Boolean** | InvertSelection flips the meaning of PipelineIDs from an include-list to an exclude-list, so the rule monitors every pipeline except those listed. It only applies to pipeline-granularity rule types; billing- and organization-scoped types never consult PipelineIDs. |  [optional] |
|**managedBy** | **ModelsManagedBy** |  |  [optional] |
|**name** | **String** |  |  [optional] |
|**organizationId** | **String** |  |  [optional] |
|**pipelineIds** | **List&lt;String&gt;** |  |  [optional] |
|**resourceMetadata** | [**ConnectormetaResourceMetadata**](ConnectormetaResourceMetadata.md) |  |  [optional] |
|**ruleConfig** | **Map&lt;String, Object&gt;** |  |  [optional] |
|**severity** | **String** |  |  [optional] |
|**type** | **String** |  |  [optional] |
|**updatedAt** | **String** |  |  [optional] |



