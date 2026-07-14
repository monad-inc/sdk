

# ModelsResourceShareChangeSet


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**created** | [**List&lt;ModelsResourceShare&gt;**](ModelsResourceShare.md) | Shares newly created by the request. |  [optional] |
|**revoked** | [**List&lt;ModelsResourceShare&gt;**](ModelsResourceShare.md) | Shares revoked (deleted) by the request. |  [optional] |
|**shareWithAllNewChildren** | **Boolean** | The resource&#39;s auto-share policy state after the request. |  [optional] |
|**skippedInUse** | [**List&lt;ModelsResourceShare&gt;**](ModelsResourceShare.md) | SkippedInUse holds shares a revoke_all_not_in_use request deliberately left in place because the target org is still using the resource. Empty for every other request shape. |  [optional] |



