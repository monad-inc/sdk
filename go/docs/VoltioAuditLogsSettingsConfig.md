# VoltioAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, defaults to 90 days ago. All syncs thereafter will be incremental. | [optional] 
**BaseUrl** | Pointer to **string** | Base URL of your Volt.io API instance (e.g., https://api.volt.io) | [optional] 
**CustomerId** | Pointer to **string** | Optional: Filter audit logs by specific customer ID | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewVoltioAuditLogsSettingsConfig

`func NewVoltioAuditLogsSettingsConfig() *VoltioAuditLogsSettingsConfig`

NewVoltioAuditLogsSettingsConfig instantiates a new VoltioAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVoltioAuditLogsSettingsConfigWithDefaults

`func NewVoltioAuditLogsSettingsConfigWithDefaults() *VoltioAuditLogsSettingsConfig`

NewVoltioAuditLogsSettingsConfigWithDefaults instantiates a new VoltioAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *VoltioAuditLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *VoltioAuditLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *VoltioAuditLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *VoltioAuditLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetBaseUrl

`func (o *VoltioAuditLogsSettingsConfig) GetBaseUrl() string`

GetBaseUrl returns the BaseUrl field if non-nil, zero value otherwise.

### GetBaseUrlOk

`func (o *VoltioAuditLogsSettingsConfig) GetBaseUrlOk() (*string, bool)`

GetBaseUrlOk returns a tuple with the BaseUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseUrl

`func (o *VoltioAuditLogsSettingsConfig) SetBaseUrl(v string)`

SetBaseUrl sets BaseUrl field to given value.

### HasBaseUrl

`func (o *VoltioAuditLogsSettingsConfig) HasBaseUrl() bool`

HasBaseUrl returns a boolean if a field has been set.

### GetCustomerId

`func (o *VoltioAuditLogsSettingsConfig) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *VoltioAuditLogsSettingsConfig) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *VoltioAuditLogsSettingsConfig) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.

### HasCustomerId

`func (o *VoltioAuditLogsSettingsConfig) HasCustomerId() bool`

HasCustomerId returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *VoltioAuditLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *VoltioAuditLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *VoltioAuditLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *VoltioAuditLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


