

# AzureEventHubsSettingsConfig

Microsoft Event Hubs settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**consumerGroup** | **String** | The consumer group name for reading events (default: &#x60;$Default&#x60;) |  [optional] |
|**eventHubName** | **String** | The name of the specific Event Hub to consume from |  [optional] |
|**eventHubNamespace** | **String** | The fully qualified namespace URL (e.g., &#x60;your-namespace.servicebus.windows.net&#x60;) |  [optional] |
|**lookbackDuration** | **Integer** | The duration to look back for events in minutes (default: 60 minutes) |  [optional] |
|**subscriptionId** | **String** | The Azure subscription ID containing your Event Hubs namespace |  [optional] |
|**tenantId** | **String** | The Azure Entra ID tenant (directory) ID |  [optional] |



