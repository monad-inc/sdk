# RunrevealSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**BearerToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**WebhookId** | **string** | The RunReveal webhook ID. Only the ID — not the full URL shown in the RunReveal UI. | 

## Methods

### NewRunrevealSettingsConfig

`func NewRunrevealSettingsConfig(webhookId string, ) *RunrevealSettingsConfig`

NewRunrevealSettingsConfig instantiates a new RunrevealSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRunrevealSettingsConfigWithDefaults

`func NewRunrevealSettingsConfigWithDefaults() *RunrevealSettingsConfig`

NewRunrevealSettingsConfigWithDefaults instantiates a new RunrevealSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchConfig

`func (o *RunrevealSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *RunrevealSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *RunrevealSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *RunrevealSettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetBearerToken

`func (o *RunrevealSettingsConfig) GetBearerToken() ModelsSecret`

GetBearerToken returns the BearerToken field if non-nil, zero value otherwise.

### GetBearerTokenOk

`func (o *RunrevealSettingsConfig) GetBearerTokenOk() (*ModelsSecret, bool)`

GetBearerTokenOk returns a tuple with the BearerToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerToken

`func (o *RunrevealSettingsConfig) SetBearerToken(v ModelsSecret)`

SetBearerToken sets BearerToken field to given value.

### HasBearerToken

`func (o *RunrevealSettingsConfig) HasBearerToken() bool`

HasBearerToken returns a boolean if a field has been set.

### GetWebhookId

`func (o *RunrevealSettingsConfig) GetWebhookId() string`

GetWebhookId returns the WebhookId field if non-nil, zero value otherwise.

### GetWebhookIdOk

`func (o *RunrevealSettingsConfig) GetWebhookIdOk() (*string, bool)`

GetWebhookIdOk returns a tuple with the WebhookId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebhookId

`func (o *RunrevealSettingsConfig) SetWebhookId(v string)`

SetWebhookId sets WebhookId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


