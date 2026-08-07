

# RoutesV2PipelineRequestNode


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**componentId** | **String** |  |  |
|**componentType** | **ModelsComponentType** |  |  |
|**configOverrides** | **Map&lt;String, Object&gt;** | ConfigOverrides is the per-node override delta applied to a template component&#39;s base config (RFC 0017). Ignored for non-template components (rejected by the save-time gate if present). A non-empty delta requires the pipeline_node_config_overrides flag — see nodeOverridesDisallowed — so the column stays nil for every org until the feature is turned on. |  [optional] |
|**enabled** | **Boolean** | nil &#x3D;&gt; enabled |  [optional] |
|**id** | **String** |  |  [optional] |
|**slug** | **String** |  |  [optional] |



