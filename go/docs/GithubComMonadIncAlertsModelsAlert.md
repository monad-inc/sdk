# GithubComMonadIncAlertsModelsAlert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | Pointer to **int32** | Timestamp of original alert creation | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Metadata** | Pointer to **interface{}** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**Resource** | Pointer to [**GithubComMonadIncAlertsModelsResourceReference**](GithubComMonadIncAlertsModelsResourceReference.md) |  | [optional] 
**RuleId** | Pointer to **string** |  | [optional] 
**Severity** | Pointer to **string** |  | [optional] 
**Status** | Pointer to [**GithubComMonadIncAlertsModelsAlertStatus**](GithubComMonadIncAlertsModelsAlertStatus.md) |  | [optional] 

## Methods

### NewGithubComMonadIncAlertsModelsAlert

`func NewGithubComMonadIncAlertsModelsAlert() *GithubComMonadIncAlertsModelsAlert`

NewGithubComMonadIncAlertsModelsAlert instantiates a new GithubComMonadIncAlertsModelsAlert object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGithubComMonadIncAlertsModelsAlertWithDefaults

`func NewGithubComMonadIncAlertsModelsAlertWithDefaults() *GithubComMonadIncAlertsModelsAlert`

NewGithubComMonadIncAlertsModelsAlertWithDefaults instantiates a new GithubComMonadIncAlertsModelsAlert object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *GithubComMonadIncAlertsModelsAlert) GetCreatedAt() int32`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GithubComMonadIncAlertsModelsAlert) GetCreatedAtOk() (*int32, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GithubComMonadIncAlertsModelsAlert) SetCreatedAt(v int32)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *GithubComMonadIncAlertsModelsAlert) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *GithubComMonadIncAlertsModelsAlert) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GithubComMonadIncAlertsModelsAlert) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GithubComMonadIncAlertsModelsAlert) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GithubComMonadIncAlertsModelsAlert) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *GithubComMonadIncAlertsModelsAlert) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GithubComMonadIncAlertsModelsAlert) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GithubComMonadIncAlertsModelsAlert) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GithubComMonadIncAlertsModelsAlert) HasId() bool`

HasId returns a boolean if a field has been set.

### GetMetadata

`func (o *GithubComMonadIncAlertsModelsAlert) GetMetadata() interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *GithubComMonadIncAlertsModelsAlert) GetMetadataOk() (*interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *GithubComMonadIncAlertsModelsAlert) SetMetadata(v interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *GithubComMonadIncAlertsModelsAlert) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *GithubComMonadIncAlertsModelsAlert) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *GithubComMonadIncAlertsModelsAlert) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetName

`func (o *GithubComMonadIncAlertsModelsAlert) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GithubComMonadIncAlertsModelsAlert) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GithubComMonadIncAlertsModelsAlert) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *GithubComMonadIncAlertsModelsAlert) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *GithubComMonadIncAlertsModelsAlert) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *GithubComMonadIncAlertsModelsAlert) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *GithubComMonadIncAlertsModelsAlert) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *GithubComMonadIncAlertsModelsAlert) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetResource

`func (o *GithubComMonadIncAlertsModelsAlert) GetResource() GithubComMonadIncAlertsModelsResourceReference`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *GithubComMonadIncAlertsModelsAlert) GetResourceOk() (*GithubComMonadIncAlertsModelsResourceReference, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *GithubComMonadIncAlertsModelsAlert) SetResource(v GithubComMonadIncAlertsModelsResourceReference)`

SetResource sets Resource field to given value.

### HasResource

`func (o *GithubComMonadIncAlertsModelsAlert) HasResource() bool`

HasResource returns a boolean if a field has been set.

### GetRuleId

`func (o *GithubComMonadIncAlertsModelsAlert) GetRuleId() string`

GetRuleId returns the RuleId field if non-nil, zero value otherwise.

### GetRuleIdOk

`func (o *GithubComMonadIncAlertsModelsAlert) GetRuleIdOk() (*string, bool)`

GetRuleIdOk returns a tuple with the RuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleId

`func (o *GithubComMonadIncAlertsModelsAlert) SetRuleId(v string)`

SetRuleId sets RuleId field to given value.

### HasRuleId

`func (o *GithubComMonadIncAlertsModelsAlert) HasRuleId() bool`

HasRuleId returns a boolean if a field has been set.

### GetSeverity

`func (o *GithubComMonadIncAlertsModelsAlert) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *GithubComMonadIncAlertsModelsAlert) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *GithubComMonadIncAlertsModelsAlert) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *GithubComMonadIncAlertsModelsAlert) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetStatus

`func (o *GithubComMonadIncAlertsModelsAlert) GetStatus() GithubComMonadIncAlertsModelsAlertStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GithubComMonadIncAlertsModelsAlert) GetStatusOk() (*GithubComMonadIncAlertsModelsAlertStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GithubComMonadIncAlertsModelsAlert) SetStatus(v GithubComMonadIncAlertsModelsAlertStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GithubComMonadIncAlertsModelsAlert) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


