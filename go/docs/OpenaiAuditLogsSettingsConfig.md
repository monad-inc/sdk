# OpenaiAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**RateLimit** | Pointer to [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewOpenaiAuditLogsSettingsConfig

`func NewOpenaiAuditLogsSettingsConfig() *OpenaiAuditLogsSettingsConfig`

NewOpenaiAuditLogsSettingsConfig instantiates a new OpenaiAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOpenaiAuditLogsSettingsConfigWithDefaults

`func NewOpenaiAuditLogsSettingsConfigWithDefaults() *OpenaiAuditLogsSettingsConfig`

NewOpenaiAuditLogsSettingsConfigWithDefaults instantiates a new OpenaiAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *OpenaiAuditLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *OpenaiAuditLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *OpenaiAuditLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *OpenaiAuditLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetRateLimit

`func (o *OpenaiAuditLogsSettingsConfig) GetRateLimit() ModelsInputRateLimit`

GetRateLimit returns the RateLimit field if non-nil, zero value otherwise.

### GetRateLimitOk

`func (o *OpenaiAuditLogsSettingsConfig) GetRateLimitOk() (*ModelsInputRateLimit, bool)`

GetRateLimitOk returns a tuple with the RateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimit

`func (o *OpenaiAuditLogsSettingsConfig) SetRateLimit(v ModelsInputRateLimit)`

SetRateLimit sets RateLimit field to given value.

### HasRateLimit

`func (o *OpenaiAuditLogsSettingsConfig) HasRateLimit() bool`

HasRateLimit returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *OpenaiAuditLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *OpenaiAuditLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *OpenaiAuditLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *OpenaiAuditLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


