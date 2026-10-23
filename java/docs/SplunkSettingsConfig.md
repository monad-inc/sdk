

# SplunkSettingsConfig

Splunk Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**allowInsecure** | **Boolean** | Whether to allow insecure connections (not recommended for production). |  [optional] |
|**host** | **String** | The host set on every event, used as-is. If left empty, the token&#39;s default host applies. |  [optional] |
|**index** | **String** | The index you want to send data to. If left empty, data is sent to the default index associated with the token. If specified, please read our docs for more context on Splunk token &amp; Index scoping. |  [optional] |
|**port** | **String** | The port of the Splunk instance. |  |
|**source** | **String** | The source set on every event, used as-is. If left empty, the token&#39;s default source applies. |  [optional] |
|**sourcetype** | **String** | The sourcetype set on every event, used as-is. If left empty, the token&#39;s default sourcetype applies. |  [optional] |
|**timestampField** | **String** | Optional JSON path to the event timestamp in each record, sent as the event&#39;s time. Records where it is missing, unparseable or out of range are sent without a time, so Splunk uses the time it received them. |  [optional] |
|**toCreate** | **Boolean** | Ensure this is selected if you want the connector to create the index for you. If you are using a pre-existing index, please leave this deselected. Read our docs for more context on Splunk token &amp; Index scoping. |  [optional] |
|**url** | **String** | The URL of the Splunk instance (must start with http or https). |  |
|**username** | **String** | Represents an administrative account to manage indices. Used to create an index, hence can be left empty if default index is to be used. |  [optional] |



