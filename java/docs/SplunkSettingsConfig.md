

# SplunkSettingsConfig

Splunk Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**allowInsecure** | **Boolean** | Whether to allow insecure connections (not recommended for production). |  [optional] |
|**index** | **String** | The index you want to send data to. If left empty, data is sent to the default index associated with the token. If specified, please read our docs for more context on Splunk token &amp; Index scoping. |  [optional] |
|**port** | **String** | The port of the Splunk instance. |  [optional] |
|**toCreate** | **Boolean** | Ensure this is selected if you want Monad to create the index for you. If you are using a pre-existing index, please leave this deselected. Read our docs for more context on Splunk token &amp; Index scoping. |  [optional] |
|**url** | **String** | The URL of the Splunk instance (must start with http or https). |  [optional] |
|**username** | **String** | Represents an administrative account to manage indices. Used to create an index, hence can be left empty if default index is to be used. |  [optional] |



