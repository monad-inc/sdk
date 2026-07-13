

# ModelsResourceShareTarget


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**inUse** | **Boolean** | Whether the child is actively using the resource (references a shared secret, or binds a shared component in a pipeline node). Always false when not shared. |  [optional] |
|**name** | **String** | Friendly name of the child organization. |  [optional] |
|**organizationId** | **String** | The direct child organization. |  [optional] |
|**shared** | **Boolean** | Whether the resource is currently shared to this child. |  [optional] |
|**sharedAt** | **String** | When the share was created; nil when not shared. |  [optional] |



