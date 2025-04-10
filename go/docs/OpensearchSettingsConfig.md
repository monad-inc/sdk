# OpensearchSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthMode** | Pointer to **string** | The authentication mode (basic, aws_role) | [optional] 
**Index** | Pointer to **string** | The name of the OpenSearch index to use. | [optional] 
**InsecureSkipVerify** | Pointer to **bool** | Whether to skip TLS certificate verification (not recommended for production). | [optional] 
**Region** | Pointer to **string** | The AWS Region where the OpenSearch domain is located | [optional] 
**RoleArn** | Pointer to **string** | The AWS IAM Role ARN to assume (used for aws_role auth) | [optional] 
**Url** | Pointer to **string** | The URL of the OpenSearch instance (must start with https). | [optional] 
**Username** | Pointer to **string** | The username for authenticating with OpenSearch (used for basic auth). | [optional] 

## Methods

### NewOpensearchSettingsConfig

`func NewOpensearchSettingsConfig() *OpensearchSettingsConfig`

NewOpensearchSettingsConfig instantiates a new OpensearchSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOpensearchSettingsConfigWithDefaults

`func NewOpensearchSettingsConfigWithDefaults() *OpensearchSettingsConfig`

NewOpensearchSettingsConfigWithDefaults instantiates a new OpensearchSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthMode

`func (o *OpensearchSettingsConfig) GetAuthMode() string`

GetAuthMode returns the AuthMode field if non-nil, zero value otherwise.

### GetAuthModeOk

`func (o *OpensearchSettingsConfig) GetAuthModeOk() (*string, bool)`

GetAuthModeOk returns a tuple with the AuthMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthMode

`func (o *OpensearchSettingsConfig) SetAuthMode(v string)`

SetAuthMode sets AuthMode field to given value.

### HasAuthMode

`func (o *OpensearchSettingsConfig) HasAuthMode() bool`

HasAuthMode returns a boolean if a field has been set.

### GetIndex

`func (o *OpensearchSettingsConfig) GetIndex() string`

GetIndex returns the Index field if non-nil, zero value otherwise.

### GetIndexOk

`func (o *OpensearchSettingsConfig) GetIndexOk() (*string, bool)`

GetIndexOk returns a tuple with the Index field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndex

`func (o *OpensearchSettingsConfig) SetIndex(v string)`

SetIndex sets Index field to given value.

### HasIndex

`func (o *OpensearchSettingsConfig) HasIndex() bool`

HasIndex returns a boolean if a field has been set.

### GetInsecureSkipVerify

`func (o *OpensearchSettingsConfig) GetInsecureSkipVerify() bool`

GetInsecureSkipVerify returns the InsecureSkipVerify field if non-nil, zero value otherwise.

### GetInsecureSkipVerifyOk

`func (o *OpensearchSettingsConfig) GetInsecureSkipVerifyOk() (*bool, bool)`

GetInsecureSkipVerifyOk returns a tuple with the InsecureSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsecureSkipVerify

`func (o *OpensearchSettingsConfig) SetInsecureSkipVerify(v bool)`

SetInsecureSkipVerify sets InsecureSkipVerify field to given value.

### HasInsecureSkipVerify

`func (o *OpensearchSettingsConfig) HasInsecureSkipVerify() bool`

HasInsecureSkipVerify returns a boolean if a field has been set.

### GetRegion

`func (o *OpensearchSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *OpensearchSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *OpensearchSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *OpensearchSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *OpensearchSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *OpensearchSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *OpensearchSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *OpensearchSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetUrl

`func (o *OpensearchSettingsConfig) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *OpensearchSettingsConfig) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *OpensearchSettingsConfig) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *OpensearchSettingsConfig) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetUsername

`func (o *OpensearchSettingsConfig) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *OpensearchSettingsConfig) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *OpensearchSettingsConfig) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *OpensearchSettingsConfig) HasUsername() bool`

HasUsername returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


