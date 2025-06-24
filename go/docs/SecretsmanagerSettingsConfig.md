# SecretsmanagerSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**Filters** | Pointer to [**[]GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter**](GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter.md) | Filters for returned secrets | [optional] 
**IncludePlannedDeletion** | Pointer to **bool** | Whether or not to include secrets scheduled for deletion | [optional] 
**Region** | Pointer to **string** | URL of the organization | [optional] 
**RoleArn** | Pointer to **string** | The ID of the secret to describe | [optional] 

## Methods

### NewSecretsmanagerSettingsConfig

`func NewSecretsmanagerSettingsConfig() *SecretsmanagerSettingsConfig`

NewSecretsmanagerSettingsConfig instantiates a new SecretsmanagerSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSecretsmanagerSettingsConfigWithDefaults

`func NewSecretsmanagerSettingsConfigWithDefaults() *SecretsmanagerSettingsConfig`

NewSecretsmanagerSettingsConfigWithDefaults instantiates a new SecretsmanagerSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *SecretsmanagerSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *SecretsmanagerSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *SecretsmanagerSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *SecretsmanagerSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetFilters

`func (o *SecretsmanagerSettingsConfig) GetFilters() []GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *SecretsmanagerSettingsConfig) GetFiltersOk() (*[]GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *SecretsmanagerSettingsConfig) SetFilters(v []GithubComAwsAwsSdkGoV2ServiceSecretsmanagerTypesFilter)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *SecretsmanagerSettingsConfig) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetIncludePlannedDeletion

`func (o *SecretsmanagerSettingsConfig) GetIncludePlannedDeletion() bool`

GetIncludePlannedDeletion returns the IncludePlannedDeletion field if non-nil, zero value otherwise.

### GetIncludePlannedDeletionOk

`func (o *SecretsmanagerSettingsConfig) GetIncludePlannedDeletionOk() (*bool, bool)`

GetIncludePlannedDeletionOk returns a tuple with the IncludePlannedDeletion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludePlannedDeletion

`func (o *SecretsmanagerSettingsConfig) SetIncludePlannedDeletion(v bool)`

SetIncludePlannedDeletion sets IncludePlannedDeletion field to given value.

### HasIncludePlannedDeletion

`func (o *SecretsmanagerSettingsConfig) HasIncludePlannedDeletion() bool`

HasIncludePlannedDeletion returns a boolean if a field has been set.

### GetRegion

`func (o *SecretsmanagerSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *SecretsmanagerSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *SecretsmanagerSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *SecretsmanagerSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *SecretsmanagerSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *SecretsmanagerSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *SecretsmanagerSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *SecretsmanagerSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


