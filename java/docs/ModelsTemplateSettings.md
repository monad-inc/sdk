

# ModelsTemplateSettings

TemplateSettings is present iff this component is a template: it carries the lock allow-list for per-pipeline overrides (RFC 0017 §2).

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**overridablePaths** | **List&lt;String&gt;** | OverridablePaths is the allow-list of config paths a pipeline may override (nested paths at any depth, subtree inheritance); everything else is locked. Empty/absent means fully locked. |  [optional] |



