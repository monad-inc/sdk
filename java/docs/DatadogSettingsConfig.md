

# DatadogSettingsConfig


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**ddsource** | **String** | The integration name associated with your log: the technology from which the log originated. When it matches an integration name, Datadog automatically installs the corresponding parsers and facets. |  [optional] |
|**ddtags** | **List&lt;String&gt;** | Tags associated with your logs. |  [optional] |
|**domainUrl** | **String** | The base domain of the Datadog API (e.g., us5.datadoghq.com). Logs are sent to https://http-intake.logs.&lt;DOMAIN_URL&gt;/api/v2/logs |  [optional] |
|**hostname** | **String** | The name of the originating host of the log. |  [optional] |
|**service** | **String** | The name of the application or service generating the log events. It is used to switch from Logs to APM, so make sure you define the same value when you use both products. |  [optional] |



