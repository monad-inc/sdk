# FullScansSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrgSlug** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**Repo** | Pointer to **string** | A repository slug to filter full-scans by. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewFullScansSettingsConfig

`func NewFullScansSettingsConfig() *FullScansSettingsConfig`

NewFullScansSettingsConfig instantiates a new FullScansSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFullScansSettingsConfigWithDefaults

`func NewFullScansSettingsConfigWithDefaults() *FullScansSettingsConfig`

NewFullScansSettingsConfigWithDefaults instantiates a new FullScansSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrgSlug

`func (o *FullScansSettingsConfig) GetOrgSlug() string`

GetOrgSlug returns the OrgSlug field if non-nil, zero value otherwise.

### GetOrgSlugOk

`func (o *FullScansSettingsConfig) GetOrgSlugOk() (*string, bool)`

GetOrgSlugOk returns a tuple with the OrgSlug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgSlug

`func (o *FullScansSettingsConfig) SetOrgSlug(v string)`

SetOrgSlug sets OrgSlug field to given value.

### HasOrgSlug

`func (o *FullScansSettingsConfig) HasOrgSlug() bool`

HasOrgSlug returns a boolean if a field has been set.

### GetRepo

`func (o *FullScansSettingsConfig) GetRepo() string`

GetRepo returns the Repo field if non-nil, zero value otherwise.

### GetRepoOk

`func (o *FullScansSettingsConfig) GetRepoOk() (*string, bool)`

GetRepoOk returns a tuple with the Repo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepo

`func (o *FullScansSettingsConfig) SetRepo(v string)`

SetRepo sets Repo field to given value.

### HasRepo

`func (o *FullScansSettingsConfig) HasRepo() bool`

HasRepo returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *FullScansSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *FullScansSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *FullScansSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *FullScansSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


