

# ModelsStorageTypeCostSummary


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**totalOrgCostPostFilter** | **BigDecimal** |  |  [optional] |
|**totalOrgCostPreFilter** | **BigDecimal** |  |  [optional] |
|**totalOrgIngestBytes** | **Integer** |  |  [optional] |
|**totalOrgIngestGb** | **BigDecimal** |  |  [optional] |
|**totalOrgOutputStorageBytes** | **Integer** |  |  [optional] |
|**totalOrgOutputStorageGb** | **BigDecimal** |  |  [optional] |
|**totalOrgRoutingDroppedBytes** | **Integer** | Bytes that reached a routing fan-out and matched none of its edges. They were dropped silently — no output ever saw them — so they are counted in no output&#39;s baseline and reported here on their own, where a misrouted pipeline shows up. |  [optional] |
|**totalOrgRoutingDroppedGb** | **BigDecimal** |  |  [optional] |



