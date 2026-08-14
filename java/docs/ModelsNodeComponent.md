

# ModelsNodeComponent


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**baseConfig** | **Map&lt;String, Object&gt;** | The blocks below are populated only for a node carrying an override delta, so the UI can derive per-field overridden markers client-side without a server-built per-field structure (R-1). A node with no delta leaves them empty, and BaseConfig &#x3D;&#x3D; Config.  BaseConfig is the component&#39;s config before the override delta is applied. |  [optional] |
|**config** | **Map&lt;String, Object&gt;** | Config is the node&#39;s effective config: for a node carrying an override delta it is the base merged with that delta (RFC 0017 §3); otherwise it is the component&#39;s base config unchanged. |  [optional] |
|**description** | **String** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**name** | **String** |  |  [optional] |
|**overrides** | **Map&lt;String, Object&gt;** | Overrides is the node&#39;s sparse override delta (secrets as {id} refs only). |  [optional] |
|**references** | [**ModelsReferences**](ModelsReferences.md) |  |  [optional] |
|**shareDetails** | [**ModelsShareDetails**](ModelsShareDetails.md) |  |  [optional] |
|**type** | **String** |  |  [optional] |
|**version** | **Integer** |  |  [optional] |



