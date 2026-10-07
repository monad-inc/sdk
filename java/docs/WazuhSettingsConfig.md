

# WazuhSettingsConfig

Wazuh Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**authMode** | **String** | Not exposed in the config meta; present only to reject AWS role auth submitted via the API. |  [optional] |
|**index** | **String** | The name of the index to write to. |  |
|**insecureSkipVerify** | **Boolean** | Whether to skip TLS certificate verification (not recommended for production). |  [optional] |
|**url** | **String** | The URL of the Wazuh indexer API (must start with https). |  |
|**username** | **String** | The username for authenticating with the Wazuh indexer. |  |



