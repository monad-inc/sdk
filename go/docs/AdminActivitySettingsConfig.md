# AdminActivitySettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthType** | Pointer to **string** | Authentication type (service_account or oauth) | [optional] 
**Email** | Pointer to **string** | Email address to use for authenticating with Google Cloud. | [optional] 

## Methods

### NewAdminActivitySettingsConfig

`func NewAdminActivitySettingsConfig() *AdminActivitySettingsConfig`

NewAdminActivitySettingsConfig instantiates a new AdminActivitySettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdminActivitySettingsConfigWithDefaults

`func NewAdminActivitySettingsConfigWithDefaults() *AdminActivitySettingsConfig`

NewAdminActivitySettingsConfigWithDefaults instantiates a new AdminActivitySettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthType

`func (o *AdminActivitySettingsConfig) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *AdminActivitySettingsConfig) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *AdminActivitySettingsConfig) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *AdminActivitySettingsConfig) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetEmail

`func (o *AdminActivitySettingsConfig) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *AdminActivitySettingsConfig) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *AdminActivitySettingsConfig) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *AdminActivitySettingsConfig) HasEmail() bool`

HasEmail returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


