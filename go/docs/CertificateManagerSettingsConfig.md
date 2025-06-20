# CertificateManagerSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificateStatuses** | Pointer to **[]string** |  | [optional] 
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**ExtendedKeyUsage** | Pointer to **[]string** | includes struct | [optional] 
**KeyTypes** | Pointer to **[]string** |  | [optional] 
**KeyUsage** | Pointer to **[]string** |  | [optional] 
**ManagedBy** | Pointer to **string** |  | [optional] 
**Regions** | Pointer to **[]string** |  | [optional] 
**RoleArn** | Pointer to **string** | The ARN of the role to assume to access the bucket | [optional] 

## Methods

### NewCertificateManagerSettingsConfig

`func NewCertificateManagerSettingsConfig() *CertificateManagerSettingsConfig`

NewCertificateManagerSettingsConfig instantiates a new CertificateManagerSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificateManagerSettingsConfigWithDefaults

`func NewCertificateManagerSettingsConfigWithDefaults() *CertificateManagerSettingsConfig`

NewCertificateManagerSettingsConfigWithDefaults instantiates a new CertificateManagerSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificateStatuses

`func (o *CertificateManagerSettingsConfig) GetCertificateStatuses() []string`

GetCertificateStatuses returns the CertificateStatuses field if non-nil, zero value otherwise.

### GetCertificateStatusesOk

`func (o *CertificateManagerSettingsConfig) GetCertificateStatusesOk() (*[]string, bool)`

GetCertificateStatusesOk returns a tuple with the CertificateStatuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateStatuses

`func (o *CertificateManagerSettingsConfig) SetCertificateStatuses(v []string)`

SetCertificateStatuses sets CertificateStatuses field to given value.

### HasCertificateStatuses

`func (o *CertificateManagerSettingsConfig) HasCertificateStatuses() bool`

HasCertificateStatuses returns a boolean if a field has been set.

### GetCron

`func (o *CertificateManagerSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *CertificateManagerSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *CertificateManagerSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *CertificateManagerSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetExtendedKeyUsage

`func (o *CertificateManagerSettingsConfig) GetExtendedKeyUsage() []string`

GetExtendedKeyUsage returns the ExtendedKeyUsage field if non-nil, zero value otherwise.

### GetExtendedKeyUsageOk

`func (o *CertificateManagerSettingsConfig) GetExtendedKeyUsageOk() (*[]string, bool)`

GetExtendedKeyUsageOk returns a tuple with the ExtendedKeyUsage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtendedKeyUsage

`func (o *CertificateManagerSettingsConfig) SetExtendedKeyUsage(v []string)`

SetExtendedKeyUsage sets ExtendedKeyUsage field to given value.

### HasExtendedKeyUsage

`func (o *CertificateManagerSettingsConfig) HasExtendedKeyUsage() bool`

HasExtendedKeyUsage returns a boolean if a field has been set.

### GetKeyTypes

`func (o *CertificateManagerSettingsConfig) GetKeyTypes() []string`

GetKeyTypes returns the KeyTypes field if non-nil, zero value otherwise.

### GetKeyTypesOk

`func (o *CertificateManagerSettingsConfig) GetKeyTypesOk() (*[]string, bool)`

GetKeyTypesOk returns a tuple with the KeyTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyTypes

`func (o *CertificateManagerSettingsConfig) SetKeyTypes(v []string)`

SetKeyTypes sets KeyTypes field to given value.

### HasKeyTypes

`func (o *CertificateManagerSettingsConfig) HasKeyTypes() bool`

HasKeyTypes returns a boolean if a field has been set.

### GetKeyUsage

`func (o *CertificateManagerSettingsConfig) GetKeyUsage() []string`

GetKeyUsage returns the KeyUsage field if non-nil, zero value otherwise.

### GetKeyUsageOk

`func (o *CertificateManagerSettingsConfig) GetKeyUsageOk() (*[]string, bool)`

GetKeyUsageOk returns a tuple with the KeyUsage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyUsage

`func (o *CertificateManagerSettingsConfig) SetKeyUsage(v []string)`

SetKeyUsage sets KeyUsage field to given value.

### HasKeyUsage

`func (o *CertificateManagerSettingsConfig) HasKeyUsage() bool`

HasKeyUsage returns a boolean if a field has been set.

### GetManagedBy

`func (o *CertificateManagerSettingsConfig) GetManagedBy() string`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *CertificateManagerSettingsConfig) GetManagedByOk() (*string, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *CertificateManagerSettingsConfig) SetManagedBy(v string)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *CertificateManagerSettingsConfig) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.

### GetRegions

`func (o *CertificateManagerSettingsConfig) GetRegions() []string`

GetRegions returns the Regions field if non-nil, zero value otherwise.

### GetRegionsOk

`func (o *CertificateManagerSettingsConfig) GetRegionsOk() (*[]string, bool)`

GetRegionsOk returns a tuple with the Regions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegions

`func (o *CertificateManagerSettingsConfig) SetRegions(v []string)`

SetRegions sets Regions field to given value.

### HasRegions

`func (o *CertificateManagerSettingsConfig) HasRegions() bool`

HasRegions returns a boolean if a field has been set.

### GetRoleArn

`func (o *CertificateManagerSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *CertificateManagerSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *CertificateManagerSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *CertificateManagerSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


