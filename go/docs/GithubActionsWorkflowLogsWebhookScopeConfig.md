# GithubActionsWorkflowLogsWebhookScopeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Repository** | Pointer to [**GithubActionsWorkflowLogsWebhookRepositoryScope**](GithubActionsWorkflowLogsWebhookRepositoryScope.md) |  | [optional] 
**Type** | **string** |  | 

## Methods

### NewGithubActionsWorkflowLogsWebhookScopeConfig

`func NewGithubActionsWorkflowLogsWebhookScopeConfig(type_ string, ) *GithubActionsWorkflowLogsWebhookScopeConfig`

NewGithubActionsWorkflowLogsWebhookScopeConfig instantiates a new GithubActionsWorkflowLogsWebhookScopeConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGithubActionsWorkflowLogsWebhookScopeConfigWithDefaults

`func NewGithubActionsWorkflowLogsWebhookScopeConfigWithDefaults() *GithubActionsWorkflowLogsWebhookScopeConfig`

NewGithubActionsWorkflowLogsWebhookScopeConfigWithDefaults instantiates a new GithubActionsWorkflowLogsWebhookScopeConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRepository

`func (o *GithubActionsWorkflowLogsWebhookScopeConfig) GetRepository() GithubActionsWorkflowLogsWebhookRepositoryScope`

GetRepository returns the Repository field if non-nil, zero value otherwise.

### GetRepositoryOk

`func (o *GithubActionsWorkflowLogsWebhookScopeConfig) GetRepositoryOk() (*GithubActionsWorkflowLogsWebhookRepositoryScope, bool)`

GetRepositoryOk returns a tuple with the Repository field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepository

`func (o *GithubActionsWorkflowLogsWebhookScopeConfig) SetRepository(v GithubActionsWorkflowLogsWebhookRepositoryScope)`

SetRepository sets Repository field to given value.

### HasRepository

`func (o *GithubActionsWorkflowLogsWebhookScopeConfig) HasRepository() bool`

HasRepository returns a boolean if a field has been set.

### GetType

`func (o *GithubActionsWorkflowLogsWebhookScopeConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *GithubActionsWorkflowLogsWebhookScopeConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *GithubActionsWorkflowLogsWebhookScopeConfig) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


