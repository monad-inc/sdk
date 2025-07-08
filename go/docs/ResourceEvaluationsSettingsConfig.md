# ResourceEvaluationsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input. eg: &#x60;0 0 * * *&#x60; - Daily at midnight, or &#x60;*_/15 * * * *&#x60; - Every 15 minutes | [optional] 
**EvaluationContextIdentifier** | Pointer to **string** | Filters proactive resource evaluations for a given infrastructure deployment. | [optional] 
**Region** | Pointer to **string** | The Region that you would receieve findings for | [optional] 
**RoleArn** | Pointer to **string** | The ARN of the role to assume to access the bucket | [optional] 

## Methods

### NewResourceEvaluationsSettingsConfig

`func NewResourceEvaluationsSettingsConfig() *ResourceEvaluationsSettingsConfig`

NewResourceEvaluationsSettingsConfig instantiates a new ResourceEvaluationsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResourceEvaluationsSettingsConfigWithDefaults

`func NewResourceEvaluationsSettingsConfigWithDefaults() *ResourceEvaluationsSettingsConfig`

NewResourceEvaluationsSettingsConfigWithDefaults instantiates a new ResourceEvaluationsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *ResourceEvaluationsSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *ResourceEvaluationsSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *ResourceEvaluationsSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *ResourceEvaluationsSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetEvaluationContextIdentifier

`func (o *ResourceEvaluationsSettingsConfig) GetEvaluationContextIdentifier() string`

GetEvaluationContextIdentifier returns the EvaluationContextIdentifier field if non-nil, zero value otherwise.

### GetEvaluationContextIdentifierOk

`func (o *ResourceEvaluationsSettingsConfig) GetEvaluationContextIdentifierOk() (*string, bool)`

GetEvaluationContextIdentifierOk returns a tuple with the EvaluationContextIdentifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvaluationContextIdentifier

`func (o *ResourceEvaluationsSettingsConfig) SetEvaluationContextIdentifier(v string)`

SetEvaluationContextIdentifier sets EvaluationContextIdentifier field to given value.

### HasEvaluationContextIdentifier

`func (o *ResourceEvaluationsSettingsConfig) HasEvaluationContextIdentifier() bool`

HasEvaluationContextIdentifier returns a boolean if a field has been set.

### GetRegion

`func (o *ResourceEvaluationsSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *ResourceEvaluationsSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *ResourceEvaluationsSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *ResourceEvaluationsSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *ResourceEvaluationsSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *ResourceEvaluationsSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *ResourceEvaluationsSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *ResourceEvaluationsSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


