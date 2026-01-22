# VercelUserEventsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic data for testing, instead of connecting to a real data source. Defaults to an hourly cron schedule for cron-based inputs. | [optional] 
**WithPayload** | Pointer to **bool** | Whether to include detailed payload information in the events. | [optional] 

## Methods

### NewVercelUserEventsSettingsConfig

`func NewVercelUserEventsSettingsConfig() *VercelUserEventsSettingsConfig`

NewVercelUserEventsSettingsConfig instantiates a new VercelUserEventsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVercelUserEventsSettingsConfigWithDefaults

`func NewVercelUserEventsSettingsConfigWithDefaults() *VercelUserEventsSettingsConfig`

NewVercelUserEventsSettingsConfigWithDefaults instantiates a new VercelUserEventsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *VercelUserEventsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *VercelUserEventsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *VercelUserEventsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *VercelUserEventsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *VercelUserEventsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *VercelUserEventsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *VercelUserEventsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *VercelUserEventsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetWithPayload

`func (o *VercelUserEventsSettingsConfig) GetWithPayload() bool`

GetWithPayload returns the WithPayload field if non-nil, zero value otherwise.

### GetWithPayloadOk

`func (o *VercelUserEventsSettingsConfig) GetWithPayloadOk() (*bool, bool)`

GetWithPayloadOk returns a tuple with the WithPayload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithPayload

`func (o *VercelUserEventsSettingsConfig) SetWithPayload(v bool)`

SetWithPayload sets WithPayload field to given value.

### HasWithPayload

`func (o *VercelUserEventsSettingsConfig) HasWithPayload() bool`

HasWithPayload returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


