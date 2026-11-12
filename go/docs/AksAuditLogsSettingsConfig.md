# AksAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** |  | [optional] 
**ClientId** | [**ModelsSecret**](ModelsSecret.md) |  | 
**ClientSecret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**ClusterResourceId** | Pointer to **string** |  | [optional] 
**LogCategory** | **string** |  | 
**Source** | Pointer to [**AksAuditLogsSourceConfig**](AksAuditLogsSourceConfig.md) |  | [optional] 
**TenantId** | **string** |  | 
**UseSyntheticData** | Pointer to **bool** |  | [optional] 

## Methods

### NewAksAuditLogsSettingsConfig

`func NewAksAuditLogsSettingsConfig(clientId ModelsSecret, clientSecret ModelsSecret, logCategory string, tenantId string, ) *AksAuditLogsSettingsConfig`

NewAksAuditLogsSettingsConfig instantiates a new AksAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAksAuditLogsSettingsConfigWithDefaults

`func NewAksAuditLogsSettingsConfigWithDefaults() *AksAuditLogsSettingsConfig`

NewAksAuditLogsSettingsConfigWithDefaults instantiates a new AksAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *AksAuditLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *AksAuditLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *AksAuditLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *AksAuditLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetClientId

`func (o *AksAuditLogsSettingsConfig) GetClientId() ModelsSecret`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *AksAuditLogsSettingsConfig) GetClientIdOk() (*ModelsSecret, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *AksAuditLogsSettingsConfig) SetClientId(v ModelsSecret)`

SetClientId sets ClientId field to given value.


### GetClientSecret

`func (o *AksAuditLogsSettingsConfig) GetClientSecret() ModelsSecret`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *AksAuditLogsSettingsConfig) GetClientSecretOk() (*ModelsSecret, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *AksAuditLogsSettingsConfig) SetClientSecret(v ModelsSecret)`

SetClientSecret sets ClientSecret field to given value.


### GetClusterResourceId

`func (o *AksAuditLogsSettingsConfig) GetClusterResourceId() string`

GetClusterResourceId returns the ClusterResourceId field if non-nil, zero value otherwise.

### GetClusterResourceIdOk

`func (o *AksAuditLogsSettingsConfig) GetClusterResourceIdOk() (*string, bool)`

GetClusterResourceIdOk returns a tuple with the ClusterResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterResourceId

`func (o *AksAuditLogsSettingsConfig) SetClusterResourceId(v string)`

SetClusterResourceId sets ClusterResourceId field to given value.

### HasClusterResourceId

`func (o *AksAuditLogsSettingsConfig) HasClusterResourceId() bool`

HasClusterResourceId returns a boolean if a field has been set.

### GetLogCategory

`func (o *AksAuditLogsSettingsConfig) GetLogCategory() string`

GetLogCategory returns the LogCategory field if non-nil, zero value otherwise.

### GetLogCategoryOk

`func (o *AksAuditLogsSettingsConfig) GetLogCategoryOk() (*string, bool)`

GetLogCategoryOk returns a tuple with the LogCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogCategory

`func (o *AksAuditLogsSettingsConfig) SetLogCategory(v string)`

SetLogCategory sets LogCategory field to given value.


### GetSource

`func (o *AksAuditLogsSettingsConfig) GetSource() AksAuditLogsSourceConfig`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AksAuditLogsSettingsConfig) GetSourceOk() (*AksAuditLogsSourceConfig, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AksAuditLogsSettingsConfig) SetSource(v AksAuditLogsSourceConfig)`

SetSource sets Source field to given value.

### HasSource

`func (o *AksAuditLogsSettingsConfig) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetTenantId

`func (o *AksAuditLogsSettingsConfig) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *AksAuditLogsSettingsConfig) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *AksAuditLogsSettingsConfig) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.


### GetUseSyntheticData

`func (o *AksAuditLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *AksAuditLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *AksAuditLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *AksAuditLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


