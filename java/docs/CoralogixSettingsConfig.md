

# CoralogixSettingsConfig

Coralogix Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**applicationName** | **String** | ApplicationName is stamped on every record. Coralogix uses this to separate environments/tenants. |  |
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  [optional] |
|**communication** | [**CoralogixCommunicationConfig**](CoralogixCommunicationConfig.md) |  |  [optional] |
|**region** | [**RegionEnum**](#RegionEnum) | Coralogix region (e.g. us1, eu2). Determines which regional ingress hostname is used. See https://coralogix.com/docs/integrations/coralogix-endpoints/. |  |
|**subsystemName** | **String** | SubsystemName is stamped on every record. Coralogix uses this to separate components within an application. |  |
|**timestampRecordLocation** | **String** | TimestampRecordLocation is an optional JSONPath (&#x60;$.event.time&#x60;) or gjson path pointing at the timestamp field inside each incoming record. When unset the connector stamps the current time on every record; when set the connector reads the field and fails the batch if the value is not a parseable timestamp. |  [optional] |



## Enum: RegionEnum

| Name | Value |
|---- | -----|
| US1 | &quot;us1&quot; |
| US2 | &quot;us2&quot; |
| US3 | &quot;us3&quot; |
| EU1 | &quot;eu1&quot; |
| EU2 | &quot;eu2&quot; |
| AP1 | &quot;ap1&quot; |
| AP2 | &quot;ap2&quot; |
| AP3 | &quot;ap3&quot; |



