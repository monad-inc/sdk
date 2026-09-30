

# XsiamSettingsConfig

Palo Alto XSIAM Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**allowInsecure** | **Boolean** | Skip TLS verification. Not recommended outside local testing. |  [optional] |
|**apiKey** | [**ModelsSecret**](ModelsSecret.md) |  |  [optional] |
|**enableCompression** | **Boolean** | By default the connector gzips the request body and sends &#x60;Content-Encoding: gzip&#x60;. Set true to send uncompressed instead. This MUST match the HTTP Log Collector&#39;s Compression setting in the XSIAM UI. |  [optional] |
|**tenantFqdn** | **String** | The XSIAM tenant API FQDN, hostname only (no scheme, no path). |  |



