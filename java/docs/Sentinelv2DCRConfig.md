

# Sentinelv2DCRConfig

How the destination DCR is provided: a single manual DCR, or a Monad-managed pool.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**managed** | [**Sentinelv2ManagedDCRVariant**](Sentinelv2ManagedDCRVariant.md) |  |  [optional] |
|**manual** | [**Sentinelv2ManualDCRVariant**](Sentinelv2ManualDCRVariant.md) |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| MANUAL | &quot;manual&quot; |
| MANAGED | &quot;managed&quot; |



