

# HydrolixSettingsConfig

Hydrolix Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**auth** | [**HydrolixAuthConfig**](HydrolixAuthConfig.md) |  |  |
|**host** | **String** | The hostname of the Hydrolix cluster (no scheme). Example: mycluster.hydrolix.live. |  |
|**table** | **String** | The fully-qualified target table in the form &#x60;project.table&#x60;. Sent as the &#x60;X-Hdx-Table&#x60; header on &#x60;/ingest/event&#x60;. |  |
|**token** | [**ModelsSecret**](ModelsSecret.md) |  |  [optional] |
|**transform** | **String** | Optional transform schema Hydrolix should apply when handling payloads. Sent as the &#x60;X-Hdx-Transform&#x60; header. |  [optional] |



