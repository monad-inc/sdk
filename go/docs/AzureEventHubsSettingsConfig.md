# AzureEventHubsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConsumerGroup** | Pointer to **string** | The consumer group name for reading events (default: &#x60;$Default&#x60;) | [optional] 
**EventHubName** | Pointer to **string** | The name of the specific Event Hub to consume from | [optional] 
**EventHubNamespace** | Pointer to **string** | The fully qualified namespace URL (e.g., &#x60;your-namespace.servicebus.windows.net&#x60;) | [optional] 
**LookbackDuration** | Pointer to **int32** | The duration to look back for events in minutes (default: 60 minutes) | [optional] 
**SubscriptionId** | Pointer to **string** | The Azure subscription ID containing your Event Hubs namespace | [optional] 
**TenantId** | Pointer to **string** | The Azure Entra ID tenant (directory) ID | [optional] 

## Methods

### NewAzureEventHubsSettingsConfig

`func NewAzureEventHubsSettingsConfig() *AzureEventHubsSettingsConfig`

NewAzureEventHubsSettingsConfig instantiates a new AzureEventHubsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureEventHubsSettingsConfigWithDefaults

`func NewAzureEventHubsSettingsConfigWithDefaults() *AzureEventHubsSettingsConfig`

NewAzureEventHubsSettingsConfigWithDefaults instantiates a new AzureEventHubsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConsumerGroup

`func (o *AzureEventHubsSettingsConfig) GetConsumerGroup() string`

GetConsumerGroup returns the ConsumerGroup field if non-nil, zero value otherwise.

### GetConsumerGroupOk

`func (o *AzureEventHubsSettingsConfig) GetConsumerGroupOk() (*string, bool)`

GetConsumerGroupOk returns a tuple with the ConsumerGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumerGroup

`func (o *AzureEventHubsSettingsConfig) SetConsumerGroup(v string)`

SetConsumerGroup sets ConsumerGroup field to given value.

### HasConsumerGroup

`func (o *AzureEventHubsSettingsConfig) HasConsumerGroup() bool`

HasConsumerGroup returns a boolean if a field has been set.

### GetEventHubName

`func (o *AzureEventHubsSettingsConfig) GetEventHubName() string`

GetEventHubName returns the EventHubName field if non-nil, zero value otherwise.

### GetEventHubNameOk

`func (o *AzureEventHubsSettingsConfig) GetEventHubNameOk() (*string, bool)`

GetEventHubNameOk returns a tuple with the EventHubName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventHubName

`func (o *AzureEventHubsSettingsConfig) SetEventHubName(v string)`

SetEventHubName sets EventHubName field to given value.

### HasEventHubName

`func (o *AzureEventHubsSettingsConfig) HasEventHubName() bool`

HasEventHubName returns a boolean if a field has been set.

### GetEventHubNamespace

`func (o *AzureEventHubsSettingsConfig) GetEventHubNamespace() string`

GetEventHubNamespace returns the EventHubNamespace field if non-nil, zero value otherwise.

### GetEventHubNamespaceOk

`func (o *AzureEventHubsSettingsConfig) GetEventHubNamespaceOk() (*string, bool)`

GetEventHubNamespaceOk returns a tuple with the EventHubNamespace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventHubNamespace

`func (o *AzureEventHubsSettingsConfig) SetEventHubNamespace(v string)`

SetEventHubNamespace sets EventHubNamespace field to given value.

### HasEventHubNamespace

`func (o *AzureEventHubsSettingsConfig) HasEventHubNamespace() bool`

HasEventHubNamespace returns a boolean if a field has been set.

### GetLookbackDuration

`func (o *AzureEventHubsSettingsConfig) GetLookbackDuration() int32`

GetLookbackDuration returns the LookbackDuration field if non-nil, zero value otherwise.

### GetLookbackDurationOk

`func (o *AzureEventHubsSettingsConfig) GetLookbackDurationOk() (*int32, bool)`

GetLookbackDurationOk returns a tuple with the LookbackDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLookbackDuration

`func (o *AzureEventHubsSettingsConfig) SetLookbackDuration(v int32)`

SetLookbackDuration sets LookbackDuration field to given value.

### HasLookbackDuration

`func (o *AzureEventHubsSettingsConfig) HasLookbackDuration() bool`

HasLookbackDuration returns a boolean if a field has been set.

### GetSubscriptionId

`func (o *AzureEventHubsSettingsConfig) GetSubscriptionId() string`

GetSubscriptionId returns the SubscriptionId field if non-nil, zero value otherwise.

### GetSubscriptionIdOk

`func (o *AzureEventHubsSettingsConfig) GetSubscriptionIdOk() (*string, bool)`

GetSubscriptionIdOk returns a tuple with the SubscriptionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionId

`func (o *AzureEventHubsSettingsConfig) SetSubscriptionId(v string)`

SetSubscriptionId sets SubscriptionId field to given value.

### HasSubscriptionId

`func (o *AzureEventHubsSettingsConfig) HasSubscriptionId() bool`

HasSubscriptionId returns a boolean if a field has been set.

### GetTenantId

`func (o *AzureEventHubsSettingsConfig) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *AzureEventHubsSettingsConfig) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *AzureEventHubsSettingsConfig) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *AzureEventHubsSettingsConfig) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


