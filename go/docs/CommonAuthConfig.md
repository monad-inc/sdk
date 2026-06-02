# CommonAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GithubApp** | Pointer to [**CommonGitHubAppVariant**](CommonGitHubAppVariant.md) |  | [optional] 
**PersonalAccessToken** | Pointer to [**CommonPersonalAccessTokenVariant**](CommonPersonalAccessTokenVariant.md) |  | [optional] 
**Type** | **string** |  | 

## Methods

### NewCommonAuthConfig

`func NewCommonAuthConfig(type_ string, ) *CommonAuthConfig`

NewCommonAuthConfig instantiates a new CommonAuthConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommonAuthConfigWithDefaults

`func NewCommonAuthConfigWithDefaults() *CommonAuthConfig`

NewCommonAuthConfigWithDefaults instantiates a new CommonAuthConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGithubApp

`func (o *CommonAuthConfig) GetGithubApp() CommonGitHubAppVariant`

GetGithubApp returns the GithubApp field if non-nil, zero value otherwise.

### GetGithubAppOk

`func (o *CommonAuthConfig) GetGithubAppOk() (*CommonGitHubAppVariant, bool)`

GetGithubAppOk returns a tuple with the GithubApp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGithubApp

`func (o *CommonAuthConfig) SetGithubApp(v CommonGitHubAppVariant)`

SetGithubApp sets GithubApp field to given value.

### HasGithubApp

`func (o *CommonAuthConfig) HasGithubApp() bool`

HasGithubApp returns a boolean if a field has been set.

### GetPersonalAccessToken

`func (o *CommonAuthConfig) GetPersonalAccessToken() CommonPersonalAccessTokenVariant`

GetPersonalAccessToken returns the PersonalAccessToken field if non-nil, zero value otherwise.

### GetPersonalAccessTokenOk

`func (o *CommonAuthConfig) GetPersonalAccessTokenOk() (*CommonPersonalAccessTokenVariant, bool)`

GetPersonalAccessTokenOk returns a tuple with the PersonalAccessToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonalAccessToken

`func (o *CommonAuthConfig) SetPersonalAccessToken(v CommonPersonalAccessTokenVariant)`

SetPersonalAccessToken sets PersonalAccessToken field to given value.

### HasPersonalAccessToken

`func (o *CommonAuthConfig) HasPersonalAccessToken() bool`

HasPersonalAccessToken returns a boolean if a field has been set.

### GetType

`func (o *CommonAuthConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CommonAuthConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CommonAuthConfig) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


