# SlackAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BotToken** | Pointer to [**SlackBotTokenVariant**](SlackBotTokenVariant.md) |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Webhook** | Pointer to [**SlackWebhookVariant**](SlackWebhookVariant.md) |  | [optional] 

## Methods

### NewSlackAuthConfig

`func NewSlackAuthConfig() *SlackAuthConfig`

NewSlackAuthConfig instantiates a new SlackAuthConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSlackAuthConfigWithDefaults

`func NewSlackAuthConfigWithDefaults() *SlackAuthConfig`

NewSlackAuthConfigWithDefaults instantiates a new SlackAuthConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBotToken

`func (o *SlackAuthConfig) GetBotToken() SlackBotTokenVariant`

GetBotToken returns the BotToken field if non-nil, zero value otherwise.

### GetBotTokenOk

`func (o *SlackAuthConfig) GetBotTokenOk() (*SlackBotTokenVariant, bool)`

GetBotTokenOk returns a tuple with the BotToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBotToken

`func (o *SlackAuthConfig) SetBotToken(v SlackBotTokenVariant)`

SetBotToken sets BotToken field to given value.

### HasBotToken

`func (o *SlackAuthConfig) HasBotToken() bool`

HasBotToken returns a boolean if a field has been set.

### GetType

`func (o *SlackAuthConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SlackAuthConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SlackAuthConfig) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SlackAuthConfig) HasType() bool`

HasType returns a boolean if a field has been set.

### GetWebhook

`func (o *SlackAuthConfig) GetWebhook() SlackWebhookVariant`

GetWebhook returns the Webhook field if non-nil, zero value otherwise.

### GetWebhookOk

`func (o *SlackAuthConfig) GetWebhookOk() (*SlackWebhookVariant, bool)`

GetWebhookOk returns a tuple with the Webhook field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebhook

`func (o *SlackAuthConfig) SetWebhook(v SlackWebhookVariant)`

SetWebhook sets Webhook field to given value.

### HasWebhook

`func (o *SlackAuthConfig) HasWebhook() bool`

HasWebhook returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


