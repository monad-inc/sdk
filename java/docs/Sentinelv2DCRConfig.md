

# Sentinelv2DCRConfig

How the destination DCR is provided: a single manual DCR, or a managed pool.  Optional so the connector can also accept the legacy v1 config shape, which carries a top-level RuleID instead of a DCRConfig block. When DCRConfig is nil and RuleID is set, the config is normalized to manual mode.

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



