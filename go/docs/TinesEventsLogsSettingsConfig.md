# TinesEventsLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**StoryId** | Pointer to **string** | Filter by the given story. | [optional] 
**TeamId** | Pointer to **string** | Filter by the given team. | [optional] 
**TenantUrl** | Pointer to **string** | Unique URL for your Tines instance | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewTinesEventsLogsSettingsConfig

`func NewTinesEventsLogsSettingsConfig() *TinesEventsLogsSettingsConfig`

NewTinesEventsLogsSettingsConfig instantiates a new TinesEventsLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTinesEventsLogsSettingsConfigWithDefaults

`func NewTinesEventsLogsSettingsConfigWithDefaults() *TinesEventsLogsSettingsConfig`

NewTinesEventsLogsSettingsConfigWithDefaults instantiates a new TinesEventsLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *TinesEventsLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *TinesEventsLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *TinesEventsLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *TinesEventsLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetStoryId

`func (o *TinesEventsLogsSettingsConfig) GetStoryId() string`

GetStoryId returns the StoryId field if non-nil, zero value otherwise.

### GetStoryIdOk

`func (o *TinesEventsLogsSettingsConfig) GetStoryIdOk() (*string, bool)`

GetStoryIdOk returns a tuple with the StoryId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoryId

`func (o *TinesEventsLogsSettingsConfig) SetStoryId(v string)`

SetStoryId sets StoryId field to given value.

### HasStoryId

`func (o *TinesEventsLogsSettingsConfig) HasStoryId() bool`

HasStoryId returns a boolean if a field has been set.

### GetTeamId

`func (o *TinesEventsLogsSettingsConfig) GetTeamId() string`

GetTeamId returns the TeamId field if non-nil, zero value otherwise.

### GetTeamIdOk

`func (o *TinesEventsLogsSettingsConfig) GetTeamIdOk() (*string, bool)`

GetTeamIdOk returns a tuple with the TeamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamId

`func (o *TinesEventsLogsSettingsConfig) SetTeamId(v string)`

SetTeamId sets TeamId field to given value.

### HasTeamId

`func (o *TinesEventsLogsSettingsConfig) HasTeamId() bool`

HasTeamId returns a boolean if a field has been set.

### GetTenantUrl

`func (o *TinesEventsLogsSettingsConfig) GetTenantUrl() string`

GetTenantUrl returns the TenantUrl field if non-nil, zero value otherwise.

### GetTenantUrlOk

`func (o *TinesEventsLogsSettingsConfig) GetTenantUrlOk() (*string, bool)`

GetTenantUrlOk returns a tuple with the TenantUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantUrl

`func (o *TinesEventsLogsSettingsConfig) SetTenantUrl(v string)`

SetTenantUrl sets TenantUrl field to given value.

### HasTenantUrl

`func (o *TinesEventsLogsSettingsConfig) HasTenantUrl() bool`

HasTenantUrl returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *TinesEventsLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *TinesEventsLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *TinesEventsLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *TinesEventsLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


