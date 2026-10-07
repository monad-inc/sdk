# TwilioEventsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActorSid** | Pointer to **string** | Only includes events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials. | [optional] 
**EventType** | Pointer to **string** | Only includes events of a specific event type: https://www.twilio.com/docs/usage/monitor-events#event-types | [optional] 
**ReplicationStartTime** | Pointer to **string** | Only include events after this time for the initial sync. If not specified, returns all events from the start. Must be a valid ISO 8601 formatted datetime string: yyyy-MM-dd&#39;T&#39;HH:mm:ss&#39;Z&#39; | [optional] 
**ResourceSid** | Pointer to **string** | Only include events that refer to this resource. Useful for discovering the history of a specific resource. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewTwilioEventsSettingsConfig

`func NewTwilioEventsSettingsConfig() *TwilioEventsSettingsConfig`

NewTwilioEventsSettingsConfig instantiates a new TwilioEventsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTwilioEventsSettingsConfigWithDefaults

`func NewTwilioEventsSettingsConfigWithDefaults() *TwilioEventsSettingsConfig`

NewTwilioEventsSettingsConfigWithDefaults instantiates a new TwilioEventsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActorSid

`func (o *TwilioEventsSettingsConfig) GetActorSid() string`

GetActorSid returns the ActorSid field if non-nil, zero value otherwise.

### GetActorSidOk

`func (o *TwilioEventsSettingsConfig) GetActorSidOk() (*string, bool)`

GetActorSidOk returns a tuple with the ActorSid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActorSid

`func (o *TwilioEventsSettingsConfig) SetActorSid(v string)`

SetActorSid sets ActorSid field to given value.

### HasActorSid

`func (o *TwilioEventsSettingsConfig) HasActorSid() bool`

HasActorSid returns a boolean if a field has been set.

### GetEventType

`func (o *TwilioEventsSettingsConfig) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *TwilioEventsSettingsConfig) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *TwilioEventsSettingsConfig) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *TwilioEventsSettingsConfig) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetReplicationStartTime

`func (o *TwilioEventsSettingsConfig) GetReplicationStartTime() string`

GetReplicationStartTime returns the ReplicationStartTime field if non-nil, zero value otherwise.

### GetReplicationStartTimeOk

`func (o *TwilioEventsSettingsConfig) GetReplicationStartTimeOk() (*string, bool)`

GetReplicationStartTimeOk returns a tuple with the ReplicationStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplicationStartTime

`func (o *TwilioEventsSettingsConfig) SetReplicationStartTime(v string)`

SetReplicationStartTime sets ReplicationStartTime field to given value.

### HasReplicationStartTime

`func (o *TwilioEventsSettingsConfig) HasReplicationStartTime() bool`

HasReplicationStartTime returns a boolean if a field has been set.

### GetResourceSid

`func (o *TwilioEventsSettingsConfig) GetResourceSid() string`

GetResourceSid returns the ResourceSid field if non-nil, zero value otherwise.

### GetResourceSidOk

`func (o *TwilioEventsSettingsConfig) GetResourceSidOk() (*string, bool)`

GetResourceSidOk returns a tuple with the ResourceSid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceSid

`func (o *TwilioEventsSettingsConfig) SetResourceSid(v string)`

SetResourceSid sets ResourceSid field to given value.

### HasResourceSid

`func (o *TwilioEventsSettingsConfig) HasResourceSid() bool`

HasResourceSid returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *TwilioEventsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *TwilioEventsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *TwilioEventsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *TwilioEventsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


