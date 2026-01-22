# KoiAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuditLogTypes** | Pointer to **[]string** | Filter audit logs by type(s). Available types: approval_requests, devices, endpoints, extensions, firewall. Leave empty to fetch all types. | [optional] 
**BackfillStartTime** | Pointer to **string** | BackfillStartTime is an optional ISO8601 timestamp to start fetching from. If not set, the input starts from the current time (no historical backfill). Example: \&quot;2024-01-01T00:00:00Z\&quot; | [optional] 
**BaseUrl** | Pointer to **string** | Base URL for the Koi API (default: https://api.prod.koi.security) | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewKoiAuditLogsSettingsConfig

`func NewKoiAuditLogsSettingsConfig() *KoiAuditLogsSettingsConfig`

NewKoiAuditLogsSettingsConfig instantiates a new KoiAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKoiAuditLogsSettingsConfigWithDefaults

`func NewKoiAuditLogsSettingsConfigWithDefaults() *KoiAuditLogsSettingsConfig`

NewKoiAuditLogsSettingsConfigWithDefaults instantiates a new KoiAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuditLogTypes

`func (o *KoiAuditLogsSettingsConfig) GetAuditLogTypes() []string`

GetAuditLogTypes returns the AuditLogTypes field if non-nil, zero value otherwise.

### GetAuditLogTypesOk

`func (o *KoiAuditLogsSettingsConfig) GetAuditLogTypesOk() (*[]string, bool)`

GetAuditLogTypesOk returns a tuple with the AuditLogTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuditLogTypes

`func (o *KoiAuditLogsSettingsConfig) SetAuditLogTypes(v []string)`

SetAuditLogTypes sets AuditLogTypes field to given value.

### HasAuditLogTypes

`func (o *KoiAuditLogsSettingsConfig) HasAuditLogTypes() bool`

HasAuditLogTypes returns a boolean if a field has been set.

### GetBackfillStartTime

`func (o *KoiAuditLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *KoiAuditLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *KoiAuditLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *KoiAuditLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetBaseUrl

`func (o *KoiAuditLogsSettingsConfig) GetBaseUrl() string`

GetBaseUrl returns the BaseUrl field if non-nil, zero value otherwise.

### GetBaseUrlOk

`func (o *KoiAuditLogsSettingsConfig) GetBaseUrlOk() (*string, bool)`

GetBaseUrlOk returns a tuple with the BaseUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseUrl

`func (o *KoiAuditLogsSettingsConfig) SetBaseUrl(v string)`

SetBaseUrl sets BaseUrl field to given value.

### HasBaseUrl

`func (o *KoiAuditLogsSettingsConfig) HasBaseUrl() bool`

HasBaseUrl returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *KoiAuditLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *KoiAuditLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *KoiAuditLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *KoiAuditLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


