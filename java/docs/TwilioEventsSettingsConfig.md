

# TwilioEventsSettingsConfig

Twilio Events settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**actorSid** | **String** | Only includes events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials. |  [optional] |
|**eventType** | **String** | Only includes events of a specific event type: https://www.twilio.com/docs/usage/monitor-events#event-types |  [optional] |
|**replicationStartTime** | **String** | Only include events after this time for the initial sync. If not specified, returns all events from the start. Must be a valid ISO 8601 formatted datetime string: yyyy-MM-dd&#39;T&#39;HH:mm:ss&#39;Z&#39; |  [optional] |
|**resourceSid** | **String** | Only include events that refer to this resource. Useful for discovering the history of a specific resource. |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



