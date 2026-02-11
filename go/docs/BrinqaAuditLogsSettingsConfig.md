# BrinqaAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**Hostname** | Pointer to **string** | The Brinqa environment hostname (e.g., \&quot;ssb.brinqa.net\&quot;) | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewBrinqaAuditLogsSettingsConfig

`func NewBrinqaAuditLogsSettingsConfig() *BrinqaAuditLogsSettingsConfig`

NewBrinqaAuditLogsSettingsConfig instantiates a new BrinqaAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBrinqaAuditLogsSettingsConfigWithDefaults

`func NewBrinqaAuditLogsSettingsConfigWithDefaults() *BrinqaAuditLogsSettingsConfig`

NewBrinqaAuditLogsSettingsConfigWithDefaults instantiates a new BrinqaAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *BrinqaAuditLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *BrinqaAuditLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *BrinqaAuditLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *BrinqaAuditLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetHostname

`func (o *BrinqaAuditLogsSettingsConfig) GetHostname() string`

GetHostname returns the Hostname field if non-nil, zero value otherwise.

### GetHostnameOk

`func (o *BrinqaAuditLogsSettingsConfig) GetHostnameOk() (*string, bool)`

GetHostnameOk returns a tuple with the Hostname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostname

`func (o *BrinqaAuditLogsSettingsConfig) SetHostname(v string)`

SetHostname sets Hostname field to given value.

### HasHostname

`func (o *BrinqaAuditLogsSettingsConfig) HasHostname() bool`

HasHostname returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *BrinqaAuditLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *BrinqaAuditLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *BrinqaAuditLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *BrinqaAuditLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


