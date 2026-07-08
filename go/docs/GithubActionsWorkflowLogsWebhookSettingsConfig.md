# GithubActionsWorkflowLogsWebhookSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthConfig** | Pointer to [**CommonAuthConfig**](CommonAuthConfig.md) |  | [optional] 
**Scope** | Pointer to [**GithubActionsWorkflowLogsWebhookScopeConfig**](GithubActionsWorkflowLogsWebhookScopeConfig.md) |  | [optional] 
**WebhookSecret** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Methods

### NewGithubActionsWorkflowLogsWebhookSettingsConfig

`func NewGithubActionsWorkflowLogsWebhookSettingsConfig(webhookSecret ModelsSecret, ) *GithubActionsWorkflowLogsWebhookSettingsConfig`

NewGithubActionsWorkflowLogsWebhookSettingsConfig instantiates a new GithubActionsWorkflowLogsWebhookSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGithubActionsWorkflowLogsWebhookSettingsConfigWithDefaults

`func NewGithubActionsWorkflowLogsWebhookSettingsConfigWithDefaults() *GithubActionsWorkflowLogsWebhookSettingsConfig`

NewGithubActionsWorkflowLogsWebhookSettingsConfigWithDefaults instantiates a new GithubActionsWorkflowLogsWebhookSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthConfig

`func (o *GithubActionsWorkflowLogsWebhookSettingsConfig) GetAuthConfig() CommonAuthConfig`

GetAuthConfig returns the AuthConfig field if non-nil, zero value otherwise.

### GetAuthConfigOk

`func (o *GithubActionsWorkflowLogsWebhookSettingsConfig) GetAuthConfigOk() (*CommonAuthConfig, bool)`

GetAuthConfigOk returns a tuple with the AuthConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthConfig

`func (o *GithubActionsWorkflowLogsWebhookSettingsConfig) SetAuthConfig(v CommonAuthConfig)`

SetAuthConfig sets AuthConfig field to given value.

### HasAuthConfig

`func (o *GithubActionsWorkflowLogsWebhookSettingsConfig) HasAuthConfig() bool`

HasAuthConfig returns a boolean if a field has been set.

### GetScope

`func (o *GithubActionsWorkflowLogsWebhookSettingsConfig) GetScope() GithubActionsWorkflowLogsWebhookScopeConfig`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *GithubActionsWorkflowLogsWebhookSettingsConfig) GetScopeOk() (*GithubActionsWorkflowLogsWebhookScopeConfig, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *GithubActionsWorkflowLogsWebhookSettingsConfig) SetScope(v GithubActionsWorkflowLogsWebhookScopeConfig)`

SetScope sets Scope field to given value.

### HasScope

`func (o *GithubActionsWorkflowLogsWebhookSettingsConfig) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetWebhookSecret

`func (o *GithubActionsWorkflowLogsWebhookSettingsConfig) GetWebhookSecret() ModelsSecret`

GetWebhookSecret returns the WebhookSecret field if non-nil, zero value otherwise.

### GetWebhookSecretOk

`func (o *GithubActionsWorkflowLogsWebhookSettingsConfig) GetWebhookSecretOk() (*ModelsSecret, bool)`

GetWebhookSecretOk returns a tuple with the WebhookSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebhookSecret

`func (o *GithubActionsWorkflowLogsWebhookSettingsConfig) SetWebhookSecret(v ModelsSecret)`

SetWebhookSecret sets WebhookSecret field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


