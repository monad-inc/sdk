

# RoutesV2PipelineRequestNode


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**componentId** | **String** |  |  |
|**componentType** | **ModelsComponentType** |  |  |
|**configOverrides** | **Map&lt;String, Object&gt;** | ConfigOverrides is the per-node override delta applied over the component&#39;s base config (RFC 0017). The save-time gate merges it and fully validates the effective config. A non-empty delta requires the pipeline_node_config_overrides flag — see nodeOverridesDisallowed — so the column stays nil for every org until the feature is turned on. |  [optional] |
|**enabled** | **Boolean** | nil &#x3D;&gt; enabled |  [optional] |
|**id** | **String** |  |  [optional] |
|**slug** | **String** |  |  [optional] |



