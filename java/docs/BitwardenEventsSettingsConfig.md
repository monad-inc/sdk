

# BitwardenEventsSettingsConfig

Bitwarden Events settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, will fetch from the most recent data available. |  [optional] |
|**baseUrl** | **String** | Base URL for self-hosted Bitwarden instance (required if region is SelfHosted) |  [optional] |
|**region** | **String** | Region of the Bitwarden instance: US, EU, or SelfHosted (default: US) |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



