

# ModelsNodeComponent


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**baseConfig** | **Map&lt;String, Object&gt;** | BaseConfig is the template&#39;s config before the override delta is applied. |  [optional] |
|**config** | **Map&lt;String, Object&gt;** | Config is the node&#39;s effective config: for a template-backed node it is the base merged with the node&#39;s override delta (RFC 0017 §3); otherwise it is the component&#39;s base config unchanged. |  [optional] |
|**description** | **String** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**name** | **String** |  |  [optional] |
|**overrides** | **Map&lt;String, Object&gt;** | Overrides is the node&#39;s sparse override delta (secrets as {id} refs only). |  [optional] |
|**references** | [**ModelsReferences**](ModelsReferences.md) |  |  [optional] |
|**shareDetails** | [**ModelsShareDetails**](ModelsShareDetails.md) |  |  [optional] |
|**templateSettings** | [**ModelsTemplateSettings**](ModelsTemplateSettings.md) |  |  [optional] |
|**type** | **String** |  |  [optional] |
|**version** | **Integer** |  |  [optional] |



