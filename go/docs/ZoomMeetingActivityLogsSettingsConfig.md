# ZoomMeetingActivityLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | Account ID for the input | [optional] 
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, data from 6 months ago up till now from zoom is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewZoomMeetingActivityLogsSettingsConfig

`func NewZoomMeetingActivityLogsSettingsConfig() *ZoomMeetingActivityLogsSettingsConfig`

NewZoomMeetingActivityLogsSettingsConfig instantiates a new ZoomMeetingActivityLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewZoomMeetingActivityLogsSettingsConfigWithDefaults

`func NewZoomMeetingActivityLogsSettingsConfigWithDefaults() *ZoomMeetingActivityLogsSettingsConfig`

NewZoomMeetingActivityLogsSettingsConfigWithDefaults instantiates a new ZoomMeetingActivityLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *ZoomMeetingActivityLogsSettingsConfig) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ZoomMeetingActivityLogsSettingsConfig) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ZoomMeetingActivityLogsSettingsConfig) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ZoomMeetingActivityLogsSettingsConfig) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetBackfillStartTime

`func (o *ZoomMeetingActivityLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *ZoomMeetingActivityLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *ZoomMeetingActivityLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *ZoomMeetingActivityLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *ZoomMeetingActivityLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *ZoomMeetingActivityLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *ZoomMeetingActivityLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *ZoomMeetingActivityLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


