# TinesAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, will fetch from the most recent data available. | [optional] 
**OperationNames** | Pointer to **[]string** | Filter by specific operation names (optional) | [optional] 
**TenantDomain** | Pointer to **string** | The Tines tenant domain (e.g., your-org.tines.com) | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**UserIds** | Pointer to **[]string** | Filter by specific user IDs (optional) | [optional] 

## Methods

### NewTinesAuditLogsSettingsConfig

`func NewTinesAuditLogsSettingsConfig() *TinesAuditLogsSettingsConfig`

NewTinesAuditLogsSettingsConfig instantiates a new TinesAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTinesAuditLogsSettingsConfigWithDefaults

`func NewTinesAuditLogsSettingsConfigWithDefaults() *TinesAuditLogsSettingsConfig`

NewTinesAuditLogsSettingsConfigWithDefaults instantiates a new TinesAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *TinesAuditLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *TinesAuditLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *TinesAuditLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *TinesAuditLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetOperationNames

`func (o *TinesAuditLogsSettingsConfig) GetOperationNames() []string`

GetOperationNames returns the OperationNames field if non-nil, zero value otherwise.

### GetOperationNamesOk

`func (o *TinesAuditLogsSettingsConfig) GetOperationNamesOk() (*[]string, bool)`

GetOperationNamesOk returns a tuple with the OperationNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationNames

`func (o *TinesAuditLogsSettingsConfig) SetOperationNames(v []string)`

SetOperationNames sets OperationNames field to given value.

### HasOperationNames

`func (o *TinesAuditLogsSettingsConfig) HasOperationNames() bool`

HasOperationNames returns a boolean if a field has been set.

### GetTenantDomain

`func (o *TinesAuditLogsSettingsConfig) GetTenantDomain() string`

GetTenantDomain returns the TenantDomain field if non-nil, zero value otherwise.

### GetTenantDomainOk

`func (o *TinesAuditLogsSettingsConfig) GetTenantDomainOk() (*string, bool)`

GetTenantDomainOk returns a tuple with the TenantDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantDomain

`func (o *TinesAuditLogsSettingsConfig) SetTenantDomain(v string)`

SetTenantDomain sets TenantDomain field to given value.

### HasTenantDomain

`func (o *TinesAuditLogsSettingsConfig) HasTenantDomain() bool`

HasTenantDomain returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *TinesAuditLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *TinesAuditLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *TinesAuditLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *TinesAuditLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetUserIds

`func (o *TinesAuditLogsSettingsConfig) GetUserIds() []string`

GetUserIds returns the UserIds field if non-nil, zero value otherwise.

### GetUserIdsOk

`func (o *TinesAuditLogsSettingsConfig) GetUserIdsOk() (*[]string, bool)`

GetUserIdsOk returns a tuple with the UserIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserIds

`func (o *TinesAuditLogsSettingsConfig) SetUserIds(v []string)`

SetUserIds sets UserIds field to given value.

### HasUserIds

`func (o *TinesAuditLogsSettingsConfig) HasUserIds() bool`

HasUserIds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


