# PlaidWebhooksSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | ClientID is the Plaid API client_id. Required only when verification is enabled. | [optional] 
**VerifyWebhooks** | Pointer to **bool** | VerifyWebhooks toggles Plaid signature verification. Unset defaults to true. | [optional] 
**WebhookTypes** | Pointer to **[]string** | WebhookTypes restricts which webhook_type values are emitted. Empty &#x3D; keep all. | [optional] 

## Methods

### NewPlaidWebhooksSettingsConfig

`func NewPlaidWebhooksSettingsConfig() *PlaidWebhooksSettingsConfig`

NewPlaidWebhooksSettingsConfig instantiates a new PlaidWebhooksSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlaidWebhooksSettingsConfigWithDefaults

`func NewPlaidWebhooksSettingsConfigWithDefaults() *PlaidWebhooksSettingsConfig`

NewPlaidWebhooksSettingsConfigWithDefaults instantiates a new PlaidWebhooksSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *PlaidWebhooksSettingsConfig) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *PlaidWebhooksSettingsConfig) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *PlaidWebhooksSettingsConfig) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *PlaidWebhooksSettingsConfig) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetVerifyWebhooks

`func (o *PlaidWebhooksSettingsConfig) GetVerifyWebhooks() bool`

GetVerifyWebhooks returns the VerifyWebhooks field if non-nil, zero value otherwise.

### GetVerifyWebhooksOk

`func (o *PlaidWebhooksSettingsConfig) GetVerifyWebhooksOk() (*bool, bool)`

GetVerifyWebhooksOk returns a tuple with the VerifyWebhooks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerifyWebhooks

`func (o *PlaidWebhooksSettingsConfig) SetVerifyWebhooks(v bool)`

SetVerifyWebhooks sets VerifyWebhooks field to given value.

### HasVerifyWebhooks

`func (o *PlaidWebhooksSettingsConfig) HasVerifyWebhooks() bool`

HasVerifyWebhooks returns a boolean if a field has been set.

### GetWebhookTypes

`func (o *PlaidWebhooksSettingsConfig) GetWebhookTypes() []string`

GetWebhookTypes returns the WebhookTypes field if non-nil, zero value otherwise.

### GetWebhookTypesOk

`func (o *PlaidWebhooksSettingsConfig) GetWebhookTypesOk() (*[]string, bool)`

GetWebhookTypesOk returns a tuple with the WebhookTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebhookTypes

`func (o *PlaidWebhooksSettingsConfig) SetWebhookTypes(v []string)`

SetWebhookTypes sets WebhookTypes field to given value.

### HasWebhookTypes

`func (o *PlaidWebhooksSettingsConfig) HasWebhookTypes() bool`

HasWebhookTypes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


