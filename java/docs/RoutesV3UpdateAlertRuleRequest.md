

# RoutesV3UpdateAlertRuleRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**active** | **Boolean** | Active indicates whether the alert rule is active |  [optional] |
|**description** | **String** | Description of the alert rule |  [optional] |
|**invertSelection** | **Boolean** | InvertSelection reads pipeline_ids and tags as an exclude-list instead of an include-list, so the rule applies to all pipelines except those selected. An empty selection still means all pipelines either way. |  [optional] |
|**name** | **String** | Name of the alert rule |  [optional] |
|**pipelineIds** | **List&lt;String&gt;** | Pipeline IDs that this alert rule applies to |  [optional] |
|**ruleConfig** | **Map&lt;String, Object&gt;** | RuleConfig contains the configuration for the alert rule |  [optional] |
|**severity** | **String** | Severity level of the alert. Must be one of \&quot;critical\&quot;, \&quot;high\&quot;, \&quot;medium\&quot;, \&quot;low\&quot;, \&quot;info\&quot;. |  [optional] |
|**tags** | **List&lt;String&gt;** | Tags (names) whose pipelines this alert rule also applies to. Omitted leaves the rule&#39;s tags unchanged; [] clears them. |  [optional] |



