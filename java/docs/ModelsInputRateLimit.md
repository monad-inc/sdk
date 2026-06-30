

# ModelsInputRateLimit

Optional outbound request rate limit. Unlimited when unset. Zendesk's per-minute limit is plan-tier-specific (lowest tier 200/min), so a conservative shared ceiling is used to avoid capping higher-tier customers.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**rate** | **BigDecimal** |  |  [optional] |
|**unit** | **ModelsRateUnit** |  |  [optional] |



