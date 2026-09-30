# SlackSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthConfig** | Pointer to [**SlackAuthConfig**](SlackAuthConfig.md) |  | [optional] 
**MessageTemplate** | Pointer to **string** |  | [optional] 

## Methods

### NewSlackSettingsConfig

`func NewSlackSettingsConfig() *SlackSettingsConfig`

NewSlackSettingsConfig instantiates a new SlackSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSlackSettingsConfigWithDefaults

`func NewSlackSettingsConfigWithDefaults() *SlackSettingsConfig`

NewSlackSettingsConfigWithDefaults instantiates a new SlackSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthConfig

`func (o *SlackSettingsConfig) GetAuthConfig() SlackAuthConfig`

GetAuthConfig returns the AuthConfig field if non-nil, zero value otherwise.

### GetAuthConfigOk

`func (o *SlackSettingsConfig) GetAuthConfigOk() (*SlackAuthConfig, bool)`

GetAuthConfigOk returns a tuple with the AuthConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthConfig

`func (o *SlackSettingsConfig) SetAuthConfig(v SlackAuthConfig)`

SetAuthConfig sets AuthConfig field to given value.

### HasAuthConfig

`func (o *SlackSettingsConfig) HasAuthConfig() bool`

HasAuthConfig returns a boolean if a field has been set.

### GetMessageTemplate

`func (o *SlackSettingsConfig) GetMessageTemplate() string`

GetMessageTemplate returns the MessageTemplate field if non-nil, zero value otherwise.

### GetMessageTemplateOk

`func (o *SlackSettingsConfig) GetMessageTemplateOk() (*string, bool)`

GetMessageTemplateOk returns a tuple with the MessageTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageTemplate

`func (o *SlackSettingsConfig) SetMessageTemplate(v string)`

SetMessageTemplate sets MessageTemplate field to given value.

### HasMessageTemplate

`func (o *SlackSettingsConfig) HasMessageTemplate() bool`

HasMessageTemplate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


